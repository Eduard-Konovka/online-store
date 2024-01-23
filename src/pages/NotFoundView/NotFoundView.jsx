import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMainHeight } from 'context';
import sound from 'assets/glassBreak.mp3';
import s from './NotFoundView.module.css';

export default function NotFoundView({ message }) {
  const mainHeight = useMainHeight();

  useEffect(() => {
    new Audio(sound).play();
  }, []);

  return (
    <main className={s.page} style={{ minHeight: mainHeight }} role="alert">
      <p className={s.text}>{message}</p>
    </main>
  );
}

NotFoundView.propTypes = {
  message: PropTypes.string.isRequired,
};
