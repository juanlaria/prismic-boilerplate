import { getAllPagesUids, getPageData, getSingleDocData } from '../utils/api';
import Page from '../components/page';

export default ({ doc, header, footer, preview }) => (
  <Page doc={doc} header={header} footer={footer} preview={preview} />
);

export async function getStaticPaths() {
  // Return a list of possible value for UID
  const paths = await getAllPagesUids();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ req, params, preview, previewData }) {
  //Return page data
  const { uid } = params;
  const doc = await getPageData(req, uid, previewData);
  const header = await getSingleDocData(req, 'header', previewData);
  const footer = await getSingleDocData(req, 'footer', previewData);
  return {
    props: {
      preview: !!preview,
      doc: doc || null,
      header: header || null,
      footer: footer || null,
    },
  };
}
