import { Client } from '../../utils/prismicHelpers';
import { linkResolver } from '../../prismic-configuration';

export default async (req, res) => {
  const token = req.query.token;
  if (token) {
    try {
      const url = await Client(req).previewSession(token, linkResolver, '/');
      res.setPreviewData({});
      res.writeHead(302, { Location: url });
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
