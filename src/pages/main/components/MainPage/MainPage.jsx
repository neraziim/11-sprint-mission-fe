import { Button } from '/src/components/Button';
import { Footer } from '/src/components/Footer';
import { Header } from '/src/components/Header';
import { Banner } from '../Banner';
import { ContentBox } from '../ContentBox';
import style from './MainPage.module.css';
import panda from '/src/pages/main/assets/Img_home_top.png';
import twoPanda from '/src/pages/main/assets/Img_home_bottom.png';
import hotItemImg from '/src/pages/main/assets/Img_home_01.png';
import searchImg from '/src/pages/main/assets/Img_home_02.png';
import registImg from '/src/pages/main/assets/Img_home_03.png';

export function MainPage() {
  return (
    <div className={style.container}>
      <Header />
      <Banner
        text={
          <>
            <h1>
              일상의 모든 물건을
              <br />
              거래해보세요
            </h1>
          </>
        }
        img={{
          src: panda,
          alt: '동네에서 장바구니를 들고 인사하는 판다 그림',
        }}
      >
        <Button type='banner' to='/items' text='구경하러 가기' />
      </Banner>
      <main>
        <section className='center'>
          <ContentBox
            tag='Hot Item'
            img={{
              src: hotItemImg,
              alt: '인기상품을 구경하는 판다들 그림',
            }}
            title={
              <>
                인기 상품을
                <br />
                확인해 보세요
              </>
            }
            text={
              <>
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </>
            }
          />
        </section>
        <section className='center'>
          <ContentBox
            type='rightImg'
            tag='Search'
            title={
              <>
                구매를 원하는
                <br />
                상품을 검색하세요
              </>
            }
            text={
              <>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </>
            }
            img={{
              src: searchImg,
              alt: '돋보기로 살피는 그림',
            }}
          />
        </section>
        <section className='center'>
          <ContentBox
            tag='Register'
            title={
              <>
                판매를 원하는
                <br />
                상품을 등록하세요
              </>
            }
            text={
              <>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </>
            }
            img={{
              src: registImg,
              alt: '여러 물건 사진을 폴더에 넣는 그림',
            }}
          />
        </section>
      </main>
      <Banner
        text={
          <>
            <h1>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </h1>
          </>
        }
        img={{ src: twoPanda, alt: '장바구니를 든 두 판다가 인사하는 그림' }}
      ></Banner>
      <Footer />
    </div>
  );
}
