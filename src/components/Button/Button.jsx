import { Link } from 'react-router';
import style from './Button.module.css';
import clsx from 'clsx';

//버튼의 상태와 종류에 따라 다른 css속성을 적용
export function Button({ variant = 'primary', type = 'default', text, to }) {
  const iWantToClick = clsx(
    style.btn,
    variant === 'primary' && style.primary,
    variant === 'disabled' && style.disabled,
    (type === 'btnLarge' || type === 'banner') && style.btnLarge,
    type === 'banner' && style.btnBanner,
  );

  //'to' prop이 있을 때는 이동하는 <Link> 반환, 그렇지 않으면 <button> 반환
  // 그냥 버튼인 채로 두었더니 글씨부분만 경로가 떠서 링크를 버튼으로 만듬
  return to ? (
    <Link className={iWantToClick} to={to}>
      {text}
    </Link>
  ) : (
    <button className={iWantToClick}>{text}</button>
  );
}
