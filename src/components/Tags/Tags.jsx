import PropTypes from 'prop-types';
import TAG_TAMPLATES from './tagTemplates';
import s from './Tags.module.css';

export default function Tags({ title }) {
  const tags = getTags();

  function getTags() {
    const arr = title.split(' ');

    const pureArr = arr.map(word =>
      word
        .split('')
        .filter(el => el !== ':')
        .filter(el => el !== ',')
        .join(''),
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

  return tags.map(tag => (
    <a
      href={`https://www.google.com/search?q=${tag}`}
      target="_blank"
      rel="noopener noreferrer"
      className={s.link}
      key={tag}
    >
      {tag}{' '}
    </a>
  ));
}

Tags.propTypes = {
  title: PropTypes.string.isRequired,
};
