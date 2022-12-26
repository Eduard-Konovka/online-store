import s from './Shop.module.css';

export default function Shop({ title, shopId, onClick }) {
  return (
    <button className={s.shop} type="button" onClick={() => onClick(shopId)}>
      {title}
    </button>
  );
}
