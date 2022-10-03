import { useEffect, useRef, useState, useParams } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import MainVisual from '../components/MainVisual';


const Main = ({ ICONIC, COLLECTION, PRODUCT }) => {
    const LS = useRef();
    const RS = useRef();

    const [LSS, setLSS] = useState();
    const [RSS, setRSS] = useState();

    useEffect(() => {
        setLSS(LS.current);
        setRSS(RS.current);
    }, [])

    // const TYPE = [ICONIC, PRODUCT]
    // const IconT = ICONIC.title
    // const ProT = PRODUCT.type
    // const typeList = TYPE.filter(IconT === ProT)

    return (
        <main>
            <MainVisual />
            <section className='Iconic csp'>
                <div className="inner">
                    <p>시대의 아이콘, 불가리</p>
                    <h2 className='eng'>BULGARI ICON</h2>
                    <Slider
                        // autoplay={false}
                        slidesToShow={5}>
                        {
                            ICONIC.map((el, idx) => {
                                return (
                                    <figure key={el.id} className={`ico ico0${idx + 1}`}><Link to={'/Type/'}>
                                        {el.type}
                                    </Link>
                                    </figure>
                                )
                            })
                        }

                    </Slider>
                </div>
            </section>
            <section className='Collection csp'>
                <div className="txt inner">
                    <p>컬렉션</p>
                    <h2 className='eng'>COLLECTION</h2>
                </div>
                <div className="cSlide inner">
                    <div className="left">
                        <Slider
                            ref={LS}
                            asNavFor={RSS}
                            arrows={false}>
                            {
                                COLLECTION.map((el, idx) => {
                                    return (
                                        <figure className={`col0${idx + 1}`} key={el.id}>
                                            <div className="box">
                                                <strong>{el.title}</strong>
                                                <p>{el.des}</p>
                                                <button>{el.button}</button>
                                            </div>
                                        </figure>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    <div className="right">
                        <Slider
                            ref={RS}
                            asNavFor={LSS}
                            arrows={false}
                            slidesPerRow={2}
                            rows={2}>
                            <figure className='bz01'></figure>
                            <figure className='bz02'></figure>
                            <figure className='bz03'></figure>
                            <figure className='bz04'></figure>
                            <figure className='se01'></figure>
                            <figure className='se02'></figure>
                            <figure className='se03'></figure>
                            <figure className='se04'></figure>
                            <figure className='diva01'></figure>
                            <figure className='diva02'></figure>
                            <figure className='diva03'></figure>
                            <figure className='diva04'></figure>
                        </Slider>
                    </div>
                    {/* <div className="arrows">
                        <i className='aleft' onClick={() => LS.current.slickPrev()}></i>
                        <i className='aright' onClick={() => LS.current.slickNext()}></i>
                    </div> */}
                </div>
            </section>
            <section className='ShopList csp'>
                <p>신제품</p>
                <h2 className='eng'>What's New</h2>
                <div className="inner">
                    {
                        PRODUCT.map(el => {
                            return (
                                <figure key={el.id}>
                                    <Link to={'/Itm/' + el.id}>
                                        <div className="box">
                                            <img src={process.env.PUBLIC_URL + el.src} alt="" />
                                        </div>
                                        <div className="collection">{el.collection}</div>
                                        <div className="name">{el.name}</div>
                                    </Link>
                                </figure>
                            )
                        })
                    }
                </div>
            </section>
        </main >
    )
}

export default Main;