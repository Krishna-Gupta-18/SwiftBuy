const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export const apiUrl = (path) => {
  if (!path) return API_BASE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE_URL}${path}`;
};
