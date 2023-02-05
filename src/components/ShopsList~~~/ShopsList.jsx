import Shop from 'components/Shop~~~';
import s from './ShopsList.module.css';

export default function ShopsList({ shops, onClick }) {
  return (
    <ul className={s.list}>
      {shops.map(el => (
        <li key={el._id}>
          <Shop title={el.title} shopId={el.shopId} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
