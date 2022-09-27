import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const MainVisual = () => {
    return (
        <section className="MainVisual">
            <Slider
                arrows={false}
                autoplay={true}
            >
                <figure className="itm itm01"></figure>
                <figure className="itm itm02"></figure>
                <figure className="itm itm03"></figure>
            </Slider>
        </section>

    )
}

export default MainVisual;