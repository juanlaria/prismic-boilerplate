import { getPageData } from '../utils/api';
import Page from '../components/page';

export default ({ doc, preview }) => <Page doc={doc} preview={preview} />;

export async function getStaticProps({ req, preview, previewData }) {
  //Return page data
  const uid = 'home';
  const doc = await getPageData(req, uid, previewData);
  return {
    props: {
      preview: !!preview,
      doc,
    },
  };
}
