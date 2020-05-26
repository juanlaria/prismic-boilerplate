import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Render from '../components/render';

export default function Page({ doc, header, footer, preview }) {
  const [offline, setOffline] = useState(false);

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

    useEffect(() => {
      const handleNetworkChange = (e) => {
        setOffline(!navigator.onLine);
      };
      window.addEventListener('online', handleNetworkChange);
      window.addEventListener('offline', handleNetworkChange);
    }, []);

    return (
      <Layout
        header={header}
        footer={footer}
        preview={preview}
        offline={offline}
        metadata={metadata}
        social={social}
      >
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
