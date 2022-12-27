import Button from 'components/Button';
import img from '../../db/books/javascript_the_definitive_guide.jpg';
import s from './BooksView.module.css';

export default function BookView() {
  return (
    <main>
      <div className={s.thumb}>
        <img src={img} alt="cover book" className={s.img} />

        <div className={s.item}>
          <h2 className={s.bookname}>
            JavaScript: The Definitive Guide, 7th Edition
          </h2>

          <p className={s.mb}>
            <span className={s.boldfont}>Book author: </span>David Flanagan
          </p>

          <p className={s.mb}>
            <span className={s.boldfont}>Book level: </span>Beginner
          </p>

          <p className={s.mb}>
            <span className={s.boldfont}>Book tags: </span>core
          </p>
        </div>

        <div className={s.control}>
          <p className={s.count}>
            <span className={s.boldfont}>Price, $</span>
            <span data-name="price">10.99</span>
          </p>

          <form className={s.count}>
            <label htmlFor="count" className={s.boldfont}>
              Count, units
            </label>

            <input
              name="count"
              type="number"
              defaultValue="1"
              min="1"
              max="42"
              className={s.input}
            />
          </form>

          <p className={s.count}>
            <span className={s.boldfont}>Total price, $</span>
            <span data-name="totalPrice">10.99</span>
          </p>

          <Button
            type="submit"
            title="Signing out of your account"
            onClick={null}
          >
            Add to cart
          </Button>
        </div>
      </div>

      <p className={s.description}>
        JavaScript is the programming language of the web and is used by more
        software developers today than any other programming language. For
        nearly 25 years this best seller has been the go-to guide for JavaScript
        programmers. The seventh edition is fully updated to cover the 2020
        version of JavaScript, and new chapters cover classes, modules,
        iterators, generators, Promises, async/await, and metaprogramming.
        You’ll find illuminating and engaging example code throughout. This book
        is for programmers who want to learn JavaScript and for web developers
        who want to take their understanding and mastery to the next level. It
        begins by explaining the JavaScript language itself, in detail, from the
        bottom up. It then builds on that foundation to cover the web platform
        and Node.js.
      </p>
    </main>
  );
}
