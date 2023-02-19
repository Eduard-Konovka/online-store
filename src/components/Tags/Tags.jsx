import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useBooks } from 'context';
import TAG_TAMPLATES from './tagTemplates';
import s from './Tags.module.css';

export default function Tags({ title, styles, setBooksByTag }) {
  const books = useBooks();

  const tags = getTags();

  function getTags() {
    const arr = title.split(' ');

    const pureArr = arr.map(word =>
      word
        .split('')
        .filter(el => el !== ':')
        .filter(el => el !== ',')
        .join('')
        .toLowerCase(),
    );

    const tags = [];

    for (let i = 0; i < pureArr.length; i++) {
      for (let j = 0; j < TAG_TAMPLATES.length; j++) {
        if (pureArr[i] === TAG_TAMPLATES[j] && !tags.includes(pureArr[i])) {
          tags.push(TAG_TAMPLATES[j]);
        }
      }
    }

    return tags;
  }

  function handleTagClick(tag) {
    const booksTitlesToLowerCase = books.map(book => ({
      ...book,
      title: book.title.toLowerCase(),
    }));

    const targetBooksToLowerCase = booksTitlesToLowerCase.filter(book =>
      book.title.includes(tag),
    );

    const bookIds = targetBooksToLowerCase.map(book => book._id);

    const targetBooks = books.filter(book => bookIds.includes(book._id));

    setBooksByTag(targetBooks);
  }

  return tags.map(tag => (
    <Link
      key={tag}
      to="/books"
      title={`Browse books tagged "${tag}"`}
      className={classNames(s.tag, styles)}
      onClick={() => handleTagClick(tag)}
    >
      {tag}
    </Link>
  ));
}

Tags.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
  setBooksByTag: PropTypes.func.isRequired,
};
