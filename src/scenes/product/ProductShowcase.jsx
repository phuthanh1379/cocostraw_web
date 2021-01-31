import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './ProductShowcase.scss'
// Images
import img1 from "../../resources/images/category/hinh_1.jpg";
import img2 from "../../resources/images/category/hinh_2.jpg";
import img3 from "../../resources/images/category/hinh_3.jpg";

class ProductShowcase extends Component {
    render() {
        return (
            <div className="product-showcase">
                <div className="product-title" id="homepage-product">
                    <h1>Danh mục sản phẩm</h1>
                </div>
                <div className="products">
                    <div className="product-item" id="product-1" alt="hinh_sp_1">
                        <Link to="/product/1">
                            <div className="product-image">
                                <img src={img1} alt="img1"/>
                            </div>
                        </Link>
                        <h5>COCOSTRAWS 20 ỐNG</h5>
                        <h5>THÂN THIỆN</h5>
                    </div>
                    <div className="product-item" id="product-2" alt="hinh_sp_2">
                        <Link to="/product/2">
                            <div className="product-image">
                                <img src={img2} alt="img2"/>
                            </div>
                        </Link>
                        <h5>COCOSTRAWS CHO</h5>
                        <h5>COCKTAIL</h5>
                    </div>
                    <div className="product-item" id="product-3" alt="hinh_sp_3">
                        <Link to="/product/3">
                            <div className="product-image">
                                <img src={img3} alt="img3"/>
                            </div>
                        </Link>
                        <h5>COCOSTRAWS 50 ỐNG</h5>
                        <h5>TIẾT KIỆM</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductShowcase;