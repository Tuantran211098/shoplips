import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import axios from 'axios';
import { Navigation, Grid, Pagination, Scrollbar, A11y } from 'swiper';
import { Animated } from "react-animated-css";
function ProductLoop({ passdata }) {
    /*const { data } = this.props;*/
    console.log('passdata', passdata);
    const loopProduct = passdata.slice(0, 20).map((item, index) => {

        const rating = Math.floor(item.rating);
        const tags = item.tag_list;
        const loopStar = [];
        const tagsList = [];
        const checkImageExist = "";
        const parseUrl = item.name.replace(/\s/g, "-").toLowerCase();
        for (var i = 1; i <= rating; i++) {
            loopStar.push(<i class="fa fa-star" key={i}></i>);
        }
        for (var i = 0; i < tags.length; i++) {
            tagsList.push(<span key={i} className="hp_itemstar-info-tags">{tags[i]}</span>);
        }
        axios.get(item.image_link).then((response) => {
            if (response.status) {

            }
        }).catch((error) => {
            console.log(error)
        })
        /* console.log(tagsList);*/
        return (
            <SwiperSlide key={index}>
                <div className=' hp_cate_itemstar' key={index}>
                    <div className='hp_itemstar-img '>
                        <a href={`./products/${parseUrl}`}>
                            <img src={item.image_link} alt={item.brand} />
                        </a>
                    </div>
                    <div className='hp_itemstar-info'>
                        <div className='hp_itemstar-info-name'>
                            <a href={`./products/${parseUrl}`}>
                                {item.name}
                            </a>
                        </div>
                        <div className='hp_itemstar-info-brands'>
                            <span style={{ fontFamily: "Svn-gilroy-Semibold" }}> Brands:</span> {
                                item.brand != 'null' ? item.brand : "KHÁC"
                            }
                        </div>
                        <div className='hp_itemstar-info-flex'>
                            <span className='hp_itemstar-flex-icon'>{loopStar}</span>
                            <div className='hp_itemstar-flex-price'>
                                $ {item.price}
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
        <Swiper
            modules={[Grid, Pagination, Navigation]}
            grid={{
                rows: 2,
            }}
            /*navigation={true}*/
            spaceBetween={0}
            pagination={{
                clickable: true,
            }}

            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10, navigation: true
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 10, navigation: true
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 0, navigation: true
                }
            }}
            className=""
        >
            <div className="col-md-3 col-sm-3 col-xs-3">
                {loopProduct}
            </div>
        </Swiper>
    );
}

export default ProductLoop;