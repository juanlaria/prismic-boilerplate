import { getAllDocsIds, getDocData } from '../../utils/api';
import Render from '../../components/render';

export default ({ doc, preview }) => {
  return <Render data={doc} />
};

export async function getStaticPaths() {
  // Return a list of possible value for ID
  const paths = await getAllDocsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ req, params, preview, previewData }) {
  //Return page data
  const { id } = params;
  const doc = await getDocData(req, id, previewData);
  return {
    props: {
      preview: !!preview,
      doc: doc || null,
    },
  };
}
