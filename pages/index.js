// import { Basic, Combined, Animated, bounce } from '../shared/styles';
// const Home = () => (
//   <div>
//     <Basic>Cool Styles</Basic>
//     <Combined>
//       With <code>:hover</code>.
//     </Combined>
//     <Animated animation={bounce}>Let's bounce.</Animated>
//   </div>
// );

// export default Home;

import { getPageData } from '../utils/api';
import Page from '../components/page';

export default ({ doc, preview }) => <Page doc={doc} preview={preview} />;

export async function getStaticPaths() {
  // Return a list of possible value for UID
  const paths = [{ params: { uid: '' } }];
  return {
    paths,
    fallback: false,
  };
}

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
