import PropTypes from 'prop-types';
import { CountForm, Button } from 'components';
import defaultImage from 'images/notFound.png';
import s from './SelectedBook.module.css';

const TITLE_LENGTH = 25;

export default function SelectedBook({
  selectedBook,
  changeSelectCount,
  onDeleteBook,
}) {
  const { _id, image, title, price, count } = selectedBook;

  return (
    <article className={s.card}>
      <div className={s.thumb}>
        <img
          src={image && image !== '' ? image : defaultImage}
          alt={title}
          className={s.cover}
        />

        <h3 className={s.title}>
          {title.length < TITLE_LENGTH
            ? title
            : title.slice(0, TITLE_LENGTH) + '...'}
        </h3>
      </div>

      <div className={s.controls}>
        <p className={s.price}>
          <span className={s.priceTitle}>Price: </span>
          <span className={s.priceValue}>${price}</span>
        </p>

        <CountForm
          value={count}
          price={price}
          min={1}
          max={42}
          styles={{
            formStyle: s.countForm,
            labelStyle: s.countLabel,
            inputStyle: s.countInput,
            totalPriceStyle: s.totalPrice,
            totalPriceTitleStyle: s.totalPriceTitle,
            totalPriceValueStyle: s.totalPriceValue,
          }}
          setCount={count => changeSelectCount({ count, _id })}
        />

        <Button
          title="Remove book from cart"
          type="button"
          style={s.btn}
          onClick={onDeleteBook}
        >
          Delete
        </Button>
      </div>
    </article>
  );
}

SelectedBook.propTypes = {
  selectedBook: PropTypes.object.isRequired,
  changeSelectCount: PropTypes.func.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
};
