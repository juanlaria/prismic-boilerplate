const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
export const apiEndpoint = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;

export const accessToken = '';

export const hrefResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    if (doc.uid === 'home') {
      return '/';
    }
    return '/[uid]';
  }
  // Backup for all other types
  return '/doc/[uid]';
};

export const linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    if (doc.uid === 'home') {
      return '/';
    }
    return `/${doc.uid}`;
  }
  // Backup for all other types
  return `/doc/${doc.uid}`;
};
