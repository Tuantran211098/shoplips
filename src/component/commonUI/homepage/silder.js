
import '../../../App.css';
import '../../../stylecss/common/homepage/index.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SliderHomepage() {
    const products = "banner";

    const list = []

    for (var i = 1; i <= 3; i++) {
        list.push(<SwiperSlide><img src={process.env.PUBLIC_URL + `/banner${i}.png`} /></SwiperSlide>)
    }
    return (
        <div className="SlideHome">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                rewind={true}
                navigation={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="mySwiper"
            >
                {list}
            </Swiper>
        </div >
    );
}

export default SliderHomepage;