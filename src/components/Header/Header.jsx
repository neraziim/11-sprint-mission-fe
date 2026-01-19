import { Link } from 'react-router';
import logo from '/src/assets/logo-text.svg';
import style from './Header.module.css';
import { Button } from '../Button/Button.jsx';

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.innerHeader}>
        <nav className={style.nav}>
          <Link to='/'>
            <img className={style.logo} src={logo} alt='판다마켓 로고' />
          </Link>
          <div className={style.boardBox}>
            <Link className={style.board} to='/'>
              자유게시판
            </Link>
            <Link className={style.board} to='/item'>
              중고마켓
            </Link>
          </div>
        </nav>

        <Button to='/login' text='로그인' />
      </div>
    </header>
  );
}
