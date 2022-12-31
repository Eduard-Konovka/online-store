import PropTypes from 'prop-types';
import Button from 'components/Button';
import s from './Book.module.css';
import defaultImage from './default.jpg';

export default function Book({ book, onClick }) {
  const { id, author, price, image, title, shortDescription, description } =
    book;

  return (
    <div className={s.container}>
      <img src={image ?? defaultImage} alt={title} />
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <p>Category: {author}</p>
      <p>Price: ${price}</p>
      <p>In stock: {id} units</p>
      <Button type="button" onClick={onClick}>
        Add to Cart
      </Button>
    </div>
  );
}

Book.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  available: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
