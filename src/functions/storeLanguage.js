import { languageWrapper } from 'middlewares';

export function storeLanguage(language) {
  const languageDeterminer = obj => languageWrapper(language, obj);

  try {
    localStorage.setItem('language', JSON.stringify(language));
  } catch (error) {
    console.log(error.message);
  }
}
