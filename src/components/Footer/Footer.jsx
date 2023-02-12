import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      Done in
      <a
        title="Go to the Prometheus website"
        href="https://prometheus.org.ua/"
        target="_blank"
        rel="noopener noreferrer"
        className={s.link}
      >
        Prometheus
      </a>
      ©2023
    </footer>
  );
}
