import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'components';
import avatar from './avatar.png';
import s from './SignInView.module.css';

export default function SignInView({ onClick }) {
  return (
    <main className={s.card}>
      <section className={s.thumb}>
        <img src={avatar} alt="avatar" className={s.avatar} />

        <form action="/" method="post" className={s.form}>
          <label htmlFor="username" className={s.label}>
            Username
          </label>

          <input
            type="text"
            id="username"
            name="username"
            placeholder="type Username"
            className={s.input}
          />

          <Button type="submit" title="More about the book" onClick={onClick}>
            <Link to="/:book" className={s.btn}>
              Sign in
            </Link>
          </Button>
        </form>
      </section>
    </main>
  );
}

Button.defaultProps = {
  onClick: () => null,
};

SignInView.propTypes = {
  onClick: PropTypes.func,
};
