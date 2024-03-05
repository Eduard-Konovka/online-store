export default function languageWrapper(lang, obj) {
  switch (lang) {
    case 'English':
      return obj.eng;

    case 'German':
      return obj.ger || obj.eng;

    case 'Spanish':
      return obj.spa || obj.eng;

    case 'Ukrainian':
      return obj.ukr || obj.eng;

    case 'Danish':
      return obj.dan || obj.eng;

    case 'French':
      return obj.fra || obj.eng;

    default:
      return obj.eng;
  }
}
