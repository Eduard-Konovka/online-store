import PropTypes from 'prop-types';
import Button from 'components/Button';
import defaultImage from './default.jpg';
import s from './SelectedBook.module.css';

export default function SelectedBook({
  _id,
  image,
  title,
  category,
  price,
  qwantity,
  cost,
  onSelectQwantity,
  onDeleteProduct,
}) {
  const handleSelect = e => {
    const obj = {
      _id,
      qwantity: e.target.value,
      cost: price * e.target.value,
    };

    onSelectQwantity(obj);
  };

  return (
    <div className={s.container}>
      <img src={image && image !== '' ? image : defaultImage} alt={title} />
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <form className={s.form} onChange={handleSelect}>
        <label className={s.formItem} htmlFor="qwantity">
          Qwantity:
        </label>
        <input
          className={s.formItem}
          type="number"
          name="qwantity"
          id="qwantity"
          min={1}
          max={42}
          defaultValue={qwantity}
        ></input>
      </form>
      <p>Cost: ${cost}</p>
      <Button type="button" onClick={onDeleteProduct}>
        Delete
      </Button>
    </div>
  );
}

SelectedBook.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  available: PropTypes.number,
  qwantity: PropTypes.number,
  cost: PropTypes.number,
  onSelectQwantity: PropTypes.func.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
