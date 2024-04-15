export function getLanguage() {
  return JSON.parse(localStorage.getItem('language')) || null;
}
