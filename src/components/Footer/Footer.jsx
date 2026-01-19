import { Link } from 'react-router';
import style from './Footer.module.css';

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.contentFooter}>
        <div className={style.infoCom}>©codeit - 2024</div>
        <div className={style.linksFooter}>
          <Link to='/pages/privacy.html'>Privacy Policy</Link>
          <Link to='/pages/faq.html'>FAQ</Link>
        </div>
        <div className={style.SNS}>
          <Link to='https://www.facebook.com/' target='_blank'>
            <img src='/src/assets/sns/facebook.svg' />
          </Link>
          <Link to='https://x.com/' target='_blank'>
            <img src='/src/assets/sns/twitter.svg' />
          </Link>
          <Link to='https://www.youtube.com/' target='_blank'>
            <img src='/src/assets/sns/youtube.svg' />
          </Link>
          <Link to='https://www.instagram.com/' target='_blank'>
            <img src='/src/assets/sns/instagram.svg' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
