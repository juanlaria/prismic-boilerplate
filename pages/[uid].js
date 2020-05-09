import React from 'react';
import { getAllPagesUids, getPageData } from '../utils/api';
import Layout from '../components/layout';
import Render from '../components/render';

export default function Page({ doc, preview }) {
  if (doc.data) {
    const {
      metadata_canonical,
      metadata_description,
      metadata_indexing,
      metadata_keywords,
      metadata_title,
      social,
      body,
    } = doc.data;

    const metadata = {
      canonical: metadata_canonical,
      description: metadata_description,
      indexing: metadata_indexing,
      keywords: metadata_keywords,
      title: metadata_title,
    };

    return (
      <Layout preview={preview} metadata={metadata} social={social}>
        {body.map((element, index) => {
          return <Render data={element} key={`render-${index}`} />;
        })}
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
