import clsx from 'clsx';
import style from './Banner.module.css';

/*배너 상하 구조가 같아서 컴포넌트로 만들고
 버튼 유무 차이가 있어서 버튼은 children으로 받음*/
export function Banner({ text, children, img }) {
  return (
    <div className={style.banner}>
      <div className='contents center'>
        <div className={clsx(style.containerTxt, 'column')}>
          {text}
          {children}
        </div>
        <img src={img.src} alt={img.alt} />
      </div>
    </div>
  );
}
