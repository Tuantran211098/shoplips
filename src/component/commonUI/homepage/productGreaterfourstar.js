import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import axios from 'axios';
import { Navigation, Grid, Pagination, Scrollbar, A11y } from 'swiper';
import { Animated } from "react-animated-css";
function CategreaterfourStar() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=3');
                setData(response.data);
                /*console.log('response data', data);*/
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, []);
    const loopProduct = data.slice(0, 20).map((item) => {
        /*console.log(item.tag_list);*/
        const rating = Math.floor(item.rating);
        const tags = item.tag_list;
        const loopStar = [];
        const tagsList = [];
        for (var i = 1; i <= rating; i++) {
            loopStar.push(<i class="fa fa-star" key={i}></i>);
        }
        for (var i = 0; i < tags.length; i++) {
            tagsList.push(<span key={i} className="hp_itemstar-info-tags"></span>);
        }
        console.log(tagsList);
        return (
            <SwiperSlide>
                <div className='hp_cate_itemstar'>
                    <div className='hp_itemstar-img '>
                        <img src={item.image_link} alt={item.brand} />
                    </div>
                    <div className='hp_itemstar-info'>
                        <div className='hp_itemstar-info-name'>
                            {item.name}
                        </div>
                        {
                            item.brand != 'null' ? item.brand : "KHÁC"
                        }
                        <div className='hp_itemstar-info-flex'>
                            <span className='hp_itemstar-flex-icon'>{loopStar}</span>
                            <div className='hp_itemstar-flex-price'>
                                {item.price}
                            </div>
                        </div>
                        <div className='hp_itemstar-info-tags'>
                            {tagsList}
                        </div>
                    </div>

                </div>
            </SwiperSlide>
        )
    });
    return (
        <div className='hp_category-starthanfour'>
            <div className="container-fluid">
                <h3 className="hp_cate-star hp_cate-title"><span>SẢN PHẨM CHẤT LƯỢNG</span></h3>
                <div className="row">
                    <Swiper
                        navigation={true}
                        grid={{
                            rows: 2,
                        }}
                        spaceBetween={0}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        breakpoints={{
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 0,
                            }
                        }}
                        className="mySwiper"
                    >
                        <div className="col-md-3 col-sm-3 col-xs-3">
                            {loopProduct}
                        </div>
                    </Swiper>
                </div>
            </div>


        </div>
    );
}

export default CategreaterfourStar;