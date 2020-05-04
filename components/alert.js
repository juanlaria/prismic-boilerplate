export default function Alert({ preview }) {
  return (
    <div>
      {preview ? (
        <>
          This is page is a preview.{' '}
          <a
            href="/api/exit-preview"
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </>
      ) : (
        <>
          The source code for this blog is{' '}
          <a href={`https://github.com/`}>available on GitHub</a>.
        </>
      )}
    </div>
  );
}
