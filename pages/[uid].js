import React from 'react';
import Head from 'next/head';
import { getAllPagesUids, getPageData } from '../lib/pages';
import htmlSerializer from '../utils/htmlSerializer';
import { RichText } from 'prismic-reactjs';

export default function Page({ doc }) {
  if (doc.data) {
    return (
      <div>
        <Head>
          <script async defer src="//static.cdn.prismic.io/prismic.js?repo=juanlaria&new=true" />
        </Head>
        {doc.data.title && (
          <RichText render={doc.data.title} htmlSerializer={htmlSerializer} />
        )}
        {doc.data.description && (
          <RichText
            render={doc.data.description}
            htmlSerializer={htmlSerializer}
          />
        )}
      </div>
    );
  } else {
    return <h1>Empty page</h1>;
  }
}

// export async function getStaticPaths() {
//   // Return a list of possible value for UID
//   const paths = await getAllPagesUids();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ req, params }) {
  //Return page data
  const { uid } = params;
  const doc = await getPageData(req, uid);
  return {
    props: { doc },
  };
}
