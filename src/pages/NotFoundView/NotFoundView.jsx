import { useEffect } from 'react';
import PropTypes from 'prop-types';
import sound from './glassBreak.mp3';
import s from './NotFoundView.module.css';

export default function NotFoundView({ message }) {
  useEffect(() => {
    new Audio(sound).play();
  }, []);

  return (
    <main className={s.bookpage} role="alert">
      <p className={s.text}>{message}</p>
    </main>
  );
}

NotFoundView.propTypes = {
  message: PropTypes.string.isRequired,
};
