import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import axios from 'axios';
import { Navigation, Grid, Pagination, Scrollbar, A11y } from 'swiper';
import ProductLoop from '../../loopProduct/index'
import { Animated } from "react-animated-css";
function HPjsTab() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick');
                setData(response.data);
                /*console.log('response data', data);*/
            } catch (error) {
                console.error(error);
            }
        }
        getUser();
    }, []);
    return (
        <div className='hp_category-dropdown'>
            <div className="container-fluid">
                <h3 className="hp_cate-star hp_cate-title"><span>SẢN PHẨM NỔI BẬT</span></h3>
                <div className="row hp_pad-comm">
                    <div className='hp_jstab-poster'>
                        <img src='https://img.pikbest.com/01/52/18/27mpIkbEsTfPZ.jpg-1.jpg!bw700' />
                    </div>
                    <div className='hp_jstab-content'>
                        <div class="tab-wrap">
                            <input type="radio" id="tab1" name="tabGroup1" class="tab" checked />
                            <label for="tab1">Short</label>

                            <input type="radio" id="tab2" name="tabGroup1" class="tab" />
                            <label for="tab2">Medium</label>

                            <input type="radio" id="tab3" name="tabGroup1" class="tab" />
                            <label for="tab3">Long</label>

                            <div class="tab__content">
                                <h3>Short Section</h3>
                                <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                            </div>

                            <div class="tab__content">
                                <h3>Medium Section</h3>
                                <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

                                <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>
                            </div>

                            <div class="tab__content">
                                <h3>Long Section</h3>
                                <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

                                <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>

                                <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

                                <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default HPjsTab;