import Head from 'next/head';

export default function GeneralCard({ canonical, title, description, image }) {
  return (
    <Head>
      {canonical && (
        <meta name="og:url" content={canonical} />
      )}
      {title && <meta name="og:title" content={title} />}
      {description && <meta name="og:description" content={description} />}
      {image && <meta name="og:image" content={image.url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Site Name" />
    </Head>
  );
}
