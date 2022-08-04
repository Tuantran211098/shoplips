
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Grid, Pagination, Scrollbar, A11y } from 'swiper';
import { Animated } from "react-animated-css";
function CategoryBrands() {
    const list = [];
    const nameBrands = ["boosh", "boosh", "colourpop", "rejuva minerals", "marcelle", "revlon", "milani", "mineral fusion", "pure anada"];
    for (var i = 1; i <= 1; i++) {
        for (var j = 1; j <= nameBrands.length; j++) {
            list.push(<SwiperSlide>
                <a href={`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${nameBrands[j]}`} alt={`${nameBrands[j]}`}>

                    <img src={process.env.PUBLIC_URL + `/BLOCK-HOME-ONE/homeone${j}.png`} />

                </a>
            </SwiperSlide>)
        }
    }
    return (
        <div className='hp_category-brands'>
            <div className="container-fluid">
                <h3 className="hp_cate-title"><span>DANH MỤC HÔM NAY</span></h3>
                <div className="row">
                    <Swiper

                        modules={[Grid, Navigation, Pagination]}
                        navigation={true}
                        slidesPerView={3}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}

                        breakpoints={{
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 10,
                            }
                        }}
                        className="mySwiper"
                    >
                        <div className="col-md-3 col-sm-3 col-xs-3">
                            {list}
                        </div>
                    </Swiper>
                </div>
            </div>


        </div>
    );
}

export default CategoryBrands;