import clsx from 'clsx';
import style from './ContentBox.module.css';

//비슷하게 생겨서 컴포넌트 재활용하고 박스와 본문 방향을 선택할 수 있게 type prop을 받음.
//파란 강조 태그, 큰 글씨 제목, 작은 글씨 텍스트, 사진도 각각 prop으로 받음
export function ContentBox({ type = 'leftImg', tag, title, text, img }) {
  return (
    <>
      <div
        className={clsx(
          style.boxContent,
          'center',
          type === 'rightImg' && style.boxReverse,
        )}
      >
        <img src={img.src} alt={img.alt} />
        <div
          className={clsx(
            style.txtRight,
            'column',
            type === 'rightImg' && style.txtLeft,
          )}
        >
          <p className={style.blueBold}>{tag}</p>
          <h1>{title}</h1>
          <p className={style.infoFeature}>{text}</p>
        </div>
      </div>
    </>
  );
}
