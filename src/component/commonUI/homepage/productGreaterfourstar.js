import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import axios from 'axios';
import { Navigation, Grid, Pagination, Scrollbar, A11y } from 'swiper';
import ProductLoop from '../../loopProduct/index'
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
    return (
        <div className='hp_category-starthanfour'>
            <div className="container-fluid">
                <h3 className="hp_cate-star hp_cate-title"><span>SẢN PHẨM CHẤT LƯỢNG</span></h3>
                <div className="row hp_pad-comm">

                    <ProductLoop passdata={data} />
                </div>
            </div>


        </div>
    );
}

export default CategreaterfourStar;