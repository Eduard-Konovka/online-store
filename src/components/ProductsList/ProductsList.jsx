import PropTypes from 'prop-types';
import Product from 'components/Product';
import s from './ProductsList.module.css';

export default function ProductsList({ products, shopId, onClick }) {
  const shopProducts = products.filter(obj => obj.shopId === shopId);

  return (
    <ul className={s.list}>
      {shopProducts.map(item => (
        <li key={item._id}>
          <Product
            imageUrl={item.imgUrl}
            title={item.title}
            description={item.descr}
            category={item.category}
            price={item.price}
            available={item.available}
            onClick={() => onClick(item._id)}
          />
        </li>
      ))}
    </ul>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
  shopId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
