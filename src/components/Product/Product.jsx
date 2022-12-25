import PropTypes from 'prop-types';
import Button from 'components/Button';
import s from './Product.module.css';
import defaultImage from './default.jpg';

export default function Product({
  imageUrl,
  title,
  description,
  category,
  price,
  available,
  onClick,
}) {
  return (
    <div className={s.container}>
      <img
        src={
          imageUrl
            ? `${process.env.REACT_APP_URL}/images/${imageUrl}`
            : defaultImage
        }
        alt={title}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>In stock: {available} units</p>
      <Button type="button" onClick={onClick}>
        Add to Cart
      </Button>
    </div>
  );
}

Product.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  available: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
