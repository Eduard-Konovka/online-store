import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchShops } from 'api';
import { Spinner, ShopsList } from 'components';
import s from './ShopsBar.module.css';

export default function ShopsBar({ onClick }) {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchShops()
      .then(shops => setShops(shops))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={s.shopsbar}>
      Shops:
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Spinner size={70} color="blue" />}
      {shops.length > 0 && <ShopsList shops={shops} onClick={onClick} />}
    </div>
  );
}

ShopsBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
