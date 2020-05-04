import { Client } from '../../utils/prismicHelpers';
import { linkResolver } from '../../prismic-configuration';

export default async (req, res) => {
  const {token: ref, documentId } = req.query;

  if (ref) {
    try {
      const url = await Client(req).getPreviewResolver(ref, documentId).resolve(linkResolver, '/');

      if (!url) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      // Enable Preview Mode by setting the cookies
      res.setPreviewData({
        ref, // pass the ref to pages so that they can fetch the draft ref
      });

      // Redirect the user to the share endpoint from same origin. This is
      // necessary due to a Chrome bug:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=696204
      res.write(
        `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
        <script>window.location.href = '${url}'</script>
        </head>`
      );

      res.end('Preview mode enabled');
    } catch {
      res
        .status(400)
        .send('Something went wrong with the previewSession request');
    }
  } else {
    res.status(400).send('Missing token from preview request');
  }
};
