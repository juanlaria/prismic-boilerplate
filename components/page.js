import React from 'react';
import Layout from '../components/layout';
import Render from '../components/render';

export default function Page({ doc, header, footer, preview }) {
  if (doc.data) {
    // Props
    const {
      metadata_canonical,
      metadata_description,
      metadata_indexing,
      metadata_keywords,
      metadata_title,
      social,
      body,
    } = doc.data;

    // Metadata
    const metadata = {
      canonical: metadata_canonical,
      description: metadata_description,
      indexing: metadata_indexing,
      keywords: metadata_keywords,
      title: metadata_title,
    };

    return (
      <Layout header={header} footer={footer} preview={preview} metadata={metadata} social={social}>
        {body.map((element, index) => {
          return (
            <Render
              data={element}
              key={`render-${element.slice_type}-${index}`}
            />
          );
        })}
      </Layout>
    );
  } else {
    return <h1>Empty page</h1>;
  }
}
