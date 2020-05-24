export default function Image({ data }) {
  const { dimensions, url, alt, bigger } = data;
  return (
    <picture>
      {bigger && <source srcSet={bigger.url} media="(min-width: 600px)" />}
      <img src={url} alt={alt || ''} width={dimensions ? dimensions.width : false} height={dimensions ? dimensions.height : false} />
    </picture>
  );
}
