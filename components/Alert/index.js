import { AlertSection } from './styles';

export default function Alert({ preview, offline }) {
  return (
    <AlertSection>
      {preview && (
        <p>
          This page is a preview. <a href="/api/exit-preview">Click here</a>{' '}
          toexit preview mode.
        </p>
      )}
      {offline && <p>You are currently offline.</p>}
    </AlertSection>
  );
}
