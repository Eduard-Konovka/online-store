import s from './Blank.module.css';

export default function Blank({ title, image, alt }) {
  return (
    <div className={s.blank}>
      <p className={s.title}>{title}</p>
      <img src={image} alt={alt} />
    </div>
  );
}
