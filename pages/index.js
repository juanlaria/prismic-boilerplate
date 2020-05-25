import { getPageData, getSingleDocData } from '../utils/api';
import Page from '../components/page';

export default ({ doc, header, footer, preview }) => (
  <Page doc={doc} header={header} footer={footer} preview={preview} />
);

export async function getStaticProps({ req, preview, previewData }) {
  //Return page data
  const uid = 'home';
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
