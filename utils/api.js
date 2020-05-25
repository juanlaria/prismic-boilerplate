import Prismic from 'prismic-javascript';
import { Client } from '../utils/prismicHelpers';

export async function getAllPagesUids() {
  const pages = await Client().query(
    Prismic.Predicates.at('document.type', 'page')
  );
  return pages.results.map(page => {
    return {
      params: {
        uid: page.uid,
      },
    };
  });
}

export async function getAllDocsIds() {
  const docs = await Client().query('');
  return docs.results.map(doc => {
    return {
      params: {
        id: doc.id,
      },
    };
  });
}

export async function getSitemapData() {
  const pages = await Client().query(
    Prismic.Predicates.at('document.type', 'page')
  );
  return pages.results.map(page => {
    const { uid, last_publication_date: lastPublicationDate } = page;
    return {
      params: {
        uid,
        lastPublicationDate,
      },
    };
  });
}

export async function getPageData(req, uid, previewData) {
  const prismicClient = Client(req);
  const prismicAPI = await prismicClient.getApi();
  const ref = previewData?.ref || prismicAPI.masterRef.ref;

  return await prismicClient.getByUID('page', uid, { ref });
}

export async function getDocData(req, uid, previewData) {
  const prismicClient = Client(req);
  const prismicAPI = await prismicClient.getApi();
  const ref = previewData?.ref || prismicAPI.masterRef.ref;

  return await prismicClient.getByID(uid, { ref });
}

export async function getSingleDocData(req, type, previewData) {
  const prismicClient = Client(req);
  const prismicAPI = await prismicClient.getApi();
  const ref = previewData?.ref || prismicAPI.masterRef.ref;

  return await prismicClient.getSingle(type, { ref });
}
