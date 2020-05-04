export const apiEndpoint = 'https://juanlaria.cdn.prismic.io/api/v2';

export const accessToken = '';

export const hrefResolver = doc => {
  if (doc.type === 'post') {
    return '/post/[uid]';
  }
  if (doc.type === 'page') {
    return '/[uid]';
  }
  return '/';
};
	
export const linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  // Backup for all other types
    return `/doc/${doc.uid}`
}