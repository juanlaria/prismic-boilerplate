import { getAllPagesUids, getPageData } from '../utils/api';
import Page from '../components/page';

export default ({ doc, preview }) => <Page doc={doc} preview={preview} />;

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
  return {
    props: {
      preview: !!preview,
      doc,
    },
  };
}
