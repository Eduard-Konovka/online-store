import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      Created by
      <a
        title="Go to the resume site of Eduard Konovka"
        href="https://eduard-konovka.github.io/resume-pdf/"
        target="_blank"
        rel="noopener noreferrer"
        className={s.link}
      >
        Eduard Konovka
      </a>
      ©{new Date().getFullYear()}
    </footer>
  );
}
