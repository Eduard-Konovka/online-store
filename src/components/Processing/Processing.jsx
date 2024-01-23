import gears from 'assets/gears.gif';
import imageProcessing from 'assets/processing.png';
import s from './Processing.module.css';

export default function Processing() {
  return (
    <div className={s.processing}>
      <p className={s.title}>Your order has been sent for processing</p>
      <div className={s.imageBox}>
        <img src={gears} alt="gears" className={s.gears} />
        <img src={imageProcessing} alt="Order processing" />
      </div>
    </div>
  );
}
