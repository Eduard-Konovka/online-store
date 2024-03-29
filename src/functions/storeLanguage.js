import { languageWrapper } from 'middlewares';
import { LANGUAGE } from 'constants';

export function storeLanguage(language) {
  const languageDeterminer = obj => languageWrapper(language, obj);

  try {
    localStorage.setItem('language', JSON.stringify(language));
  } catch (error) {
    console.log(languageDeterminer(LANGUAGE.errorStoreLanguage), error.message);
  }
}
