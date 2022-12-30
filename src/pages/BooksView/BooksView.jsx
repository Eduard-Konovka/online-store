import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchProducts from 'api/productsApi';
import Spinner from 'components/Spinner';
import ProductsList from 'components/ProductsList';
import Blank from 'components/Blank';
import imageBlank from 'images/shop.jpg';
import s from './BooksView.module.css';

export default function BooksView({ onClick }) {
  const [shopId, setShopId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetchProducts()
      .then(products => {
        setProducts(products);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={s.bookpage}>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {loading && <Spinner size={70} color="blue" />}
      {!loading && shopId === null && (
        <Blank title="Choose a shop" image={imageBlank} alt="Open shop" />
      )}
      {products.length > 0 && (
        <ProductsList products={products} shopId={shopId} onClick={onClick} />
      )}
    </div>
  );
}

BooksView.propTypes = {
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
