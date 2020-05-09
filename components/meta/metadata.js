import Head from 'next/head';

export default function Metadata({
  title,
  canonical,
  description,
  keywords,
  indexing,
}) {
  return (
    <Head>
      <title>{title || 'Site Name'}</title>
      {canonical && <link rel="canonical" href={canonical} />}
      {description && (
        <meta name="description" content={description} />
      )}
      {keywords && (
        <meta name="keywords" content={keywords} />
      )}
      {indexing && <meta name="robots" content={indexing} />}
    </Head>
  );
}
