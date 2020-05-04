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

export async function getPageData(req, uid, previewData) {
  const prismicClient = Client(req);
  const prismicAPI = await prismicClient.getApi();
  const ref = previewData?.ref || prismicAPI.masterRef.ref;
  
  return await prismicClient.getByUID('page', uid, { ref });
}
