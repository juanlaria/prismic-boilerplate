import Head from 'next/head';

const { PUBLIC_NAME } = process.env;

export default function Metadata({
  title,
  canonical,
  description,
  keywords,
  indexing,
}) {
  return (
    <Head>
      <title>{title || PUBLIC_NAME}</title>
      {canonical && <link rel="canonical" href={canonical} />}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {indexing && <meta name="robots" content={indexing} />}
    </Head>
  );
}
