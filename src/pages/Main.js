import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { ICONIC } from "../data/common";
import MainVisual from '../components/MainVisual';


const Main = () => {
    return (
        <main>
            <MainVisual />
            <section className='Iconic inner csp'>
                <p>시대의 아이콘, 불가리</p>
                <h2 className='eng'>BULGARI ICON</h2>

                <Slider
                    slidesToShow={4}>
                    {
                        ICONIC.map((el, idx) => {
                            return (
                                <figure key={el.id} className={`ico ico0${idx + 1}`}><Link to={el.link}>
                                    {el.title}
                                </Link></figure>
                            )
                        })
                    }

                </Slider>
            </section>
        </main>
    )
}

export default Main;