import classNames from 'classnames';
import PropTypes from 'prop-types';
import LINK_TAMPLATES from './linkTemplates';
import s from './Links.module.css';

export default function Links({ title, styles }) {
  const links = getLinks();

  function getLinks() {
    const arr = title.split(' ');

    const pureArr = arr.map(word =>
      word
        .split('')
        .filter(el => el !== ':')
        .filter(el => el !== ',')
        .join(''),
    );

    const links = [];

    for (let i = 0; i < pureArr.length; i++) {
      for (let j = 0; j < LINK_TAMPLATES.length; j++) {
        if (pureArr[i] === LINK_TAMPLATES[j] && !links.includes(pureArr[i])) {
          links.push(LINK_TAMPLATES[j]);
        }
      }
    }

    return links;
  }

  return links.map(link => (
    <a
      title={`Look it up on Google "${link}"`}
      href={`https://www.google.com/search?q=${link}`}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(s.link, styles)}
      key={link}
    >
      {link}
    </a>
  ));
}

Links.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};
