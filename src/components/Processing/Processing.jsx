import gears from 'images/gears.gif';
import imageProcessing from 'images/imageProcessing.png';
import s from './Processing.module.css';

export default function Processing() {
  return (
    <div className={s.blank}>
      <p className={s.title}>Your order has been sent for processing</p>
      <img src={gears} alt="gears" className={s.gears} />
      <img src={imageProcessing} alt="Order processing" />
    </div>
  );
}
