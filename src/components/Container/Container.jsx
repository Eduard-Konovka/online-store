import PropTypes from 'prop-types';
import PageHeading from '../PageHeading';
import s from './Container.module.css';

export default function Container({ title, children }) {
  return (
    <div className={s.container}>
      <PageHeading text={title} />
      {children}
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
