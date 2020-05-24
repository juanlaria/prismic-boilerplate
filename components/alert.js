export default function Alert({ preview }) {
  if (preview) {
    <div>
      <p>
        This is page is a preview. <a href="/api/exit-preview">Click here</a> to
        exit preview mode.
      </p>
    </div>;
  }
  return false;
}
