import { useState } from 'react';
import PropTypes from 'prop-types';
import ShopsBar from 'components/ShopsBar';
import ProductsBar from 'components/ProductsBar';
import s from './BooksView.module.css';

export default function BooksView({ onClick }) {
  const [shopId, setShopId] = useState(null);

  return (
    <div className={s.shoppage}>
      <ShopsBar onClick={id => setShopId(id)} />
      <ProductsBar shopId={shopId} onClick={onClick} />
    </div>
  );
}

ProductsBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// CartBar.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//     }),
//   ),
//   totalPrice: PropTypes.number.isRequired,
//   onSelectQwantity: PropTypes.func.isRequired,
//   onDeleteProduct: PropTypes.func.isRequired,
// };
