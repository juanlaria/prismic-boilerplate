import React from 'react';
import { getAllPagesUids, getPageData } from '../lib/pages';
import htmlSerializer from '../utils/htmlSerializer';
import { RichText } from 'prismic-reactjs';
import Layout from '../components/layout';

export default function Page({ doc, preview }) {
  if (doc.data) {
    return (
      <Layout preview={preview}>
        {doc.data.title && (
          <RichText render={doc.data.title} htmlSerializer={htmlSerializer} />
        )}
        {doc.data.description && (
          <RichText
            render={doc.data.description}
            htmlSerializer={htmlSerializer}
          />
        )}
      </Layout>
    );
  } else {
    return <h1>Empty page</h1>;
  }
}

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
