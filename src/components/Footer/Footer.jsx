import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <a href="https://prometheus.org.ua/" className={s.link}>
        Виконано в Prometheus ©2023
      </a>
    </footer>
  );
}
