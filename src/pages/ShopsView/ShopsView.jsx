import { useState } from 'react';
import PropTypes from 'prop-types';
import ShopsBar from 'components/ShopsBar';
import ProductsBar from 'components/ProductsBar';
import s from './ShopsView.module.css';

export default function ShopsView({ onClick }) {
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
