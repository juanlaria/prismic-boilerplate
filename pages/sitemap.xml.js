import React from 'react';
import { getSitemapData } from '../utils/api';

const { PUBLIC_URL } = process.env;

const sitemapXML = pages => {
  let latestPage = 0;
  let pagesXML = '';

  pages.map(page => {
    const { uid, lastPublicationDate } = page.params;

    const date = new Date(lastPublicationDate);
    const pageDate = date.toISOString();
    if (!latestPage || pageDate > latestPage) {
      latestPage = pageDate;
    }

    const pageURL = `${PUBLIC_URL}/${uid}/`;
    pagesXML += `
      <url>
        <loc>${pageURL}</loc>
        <lastmod>${pageDate}</lastmod>
        <priority>0.50</priority>
      </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${PUBLIC_URL}/</loc>
        // <lastmod>${latestPage}</lastmod>
        <priority>1.00</priority>
      </url>
      ${pagesXML}
    </urlset>`;
};

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const pages = await getSitemapData();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemapXML(pages));
    res.end();
  }
}

export default Sitemap;
