import PropTypes from 'prop-types';
import { CountForm, Button } from 'components';
import defaultImage from 'images/notFound.png';
import s from './SelectedBook.module.css';

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

        <h3 className={s.title}>{title}</h3>
      </div>

      <div className={s.controls}>
        <p className={s.price}>Price: ${price}</p>

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
          }}
          setCount={count => changeSelectCount({ count, _id })}
        />

        <Button type="button" onClick={onDeleteBook}>
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
