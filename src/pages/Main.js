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
                <p>시대의 아이콘, 불가리</p>
                <h2 className='eng'>BULGARI ICON</h2>
                <div className="inner">
                    <Link to="/Type/브레이슬릿">
                        {/* <Link to="/Type/bracelet"> */}
                        <figure className='ico01'>
                            <span>브레이슬릿</span>
                        </figure>
                    </Link>
                    <Link to="/Type/네크리스">
                        {/* <Link to="/Type/necklace"> */}
                        <figure className='ico02'>
                            <span>네크리스</span>
                        </figure>
                    </Link>
                    <Link to="/Type/링">
                        {/* <Link to="/Type/ring"> */}
                        <figure className='ico03'>
                            <span>링</span>
                        </figure>
                    </Link>
                    <Link to="/Type/이어링">
                        {/* <Link to="/Type/earring"> */}
                        <figure className='ico04'>
                            <span>이어링</span>
                        </figure>
                    </Link>
                    <Link to="/Type/워치">
                        {/* <Link to="/Type/watch"> */}
                        <figure className='ico05'>
                            <span>워치</span>
                        </figure>
                    </Link>
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
                            autoplay={true}
                            autoplaySpeed={4000}
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
                                                <a href={"bulgari/Collection/" + el.link}>{el.button}</a>
                                                {/* <button>{el.button}</button> */}
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
                            autoplay={true}
                            autoplaySpeed={4000}
                            asNavFor={LSS}
                            arrows={false}
                            slidesPerRow={2}
                            rows={2}>
                            <figure className='bz01'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/bz01.png'} alt="" />
                            </figure>
                            <figure className='bz02'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/bz02.png'} alt="" />
                            </figure>
                            <figure className='bz03'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/bz03.png'} alt="" />
                            </figure>
                            <figure className='bz04'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/bz04.png'} alt="" />
                            </figure>
                            <figure className='se01'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/se01.png'} alt="" />
                            </figure>
                            <figure className='se02'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/se02.png'} alt="" />
                            </figure>
                            <figure className='se03'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/se03.png'} alt="" />
                            </figure>
                            <figure className='se04'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/se04.png'} alt="" />
                            </figure>
                            <figure className='diva01'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/diva01.png'} alt="" />
                            </figure>
                            <figure className='diva02'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/diva02.png'} alt="" />
                            </figure>
                            <figure className='diva03'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/diva03.png'} alt="" />
                            </figure>
                            <figure className='diva04'>
                                <img src={process.env.PUBLIC_URL + '/assets/img/diva04.png'} alt="" />
                            </figure>
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