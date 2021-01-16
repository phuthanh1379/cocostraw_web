import React, {Component} from 'react';
import {IoMdArrowDropdown, IoMdArrowDropright, IoMdArrowDropup} from "react-icons/all";
import {Link, animateScroll as scroll } from "react-scroll";

import './Product.scss';
import OngTwenty1 from '../../resources/images/products/twenty_ong/1.jpg';
import OngTwenty3 from '../../resources/images/products/twenty_ong/3.jpg';
import OngTwenty4 from '../../resources/images/products/twenty_ong/4.jpg';
import OngTwenty5 from '../../resources/images/products/twenty_ong/5.jpg';

import OngFifty1 from '../../resources/images/products/fifty_ong/1.jpg';
import OngFifty3 from '../../resources/images/products/fifty_ong/3.jpg';
import OngFifty4 from '../../resources/images/products/fifty_ong/4.jpg';
import OngFifty5 from '../../resources/images/products/fifty_ong/5.jpg';

import Cocktail1 from '../../resources/images/products/cocktail/1.jpg';
import Cocktail3 from '../../resources/images/products/cocktail/3.jpg';
import Cocktail4 from '../../resources/images/products/cocktail/4.jpg';
import Cocktail5 from '../../resources/images/products/cocktail/5.jpg';

import OutlineButton from "../../components/button/OutlineButton";
import Testimonial from "../../components/testimonial/Testimonial";
import MultipleSlider from "../../components/slider/MultipleSlider";
import Modal from "../../components/modal/Modal";


const products = [
    {
        category: "COCOSTRAWS",
        name: "THÂN THIỆN",
        image: [
            OngTwenty1,
            OngTwenty3,
            OngTwenty4,
            OngTwenty5
        ],
        price: 32,
        description: "Nguyên liệu làm nên Cocostraws đã được nghiên cứu tìm hiểu," +
            "phân loại và quá trình chế biến và kiểm định chất lượng rất nhiều khâu nên " +
            "đảm bảo về chất lượng. Nước dừa được lấy từ xứ dừa Bến Tre trên lãnh thổ Việt Nam đạt tiêu chuẩn" +
            " nhất định để chạm được đến môi của người sử dụng.",
        detail: [
            "Phù hợp với mọi loại đồ uống",
            "22 x 0.7 cm x 20 ống",
            "Làm từ nước dừa tự nhiên",
            "Phù hợp với các loại đồ uống như nóng, lạnh, đá xay,..."
        ],
        shippingPolicy: [
            "Nội thành - 20.000",
            "Ngoại thành - 35.000",
            "Quốc nội - trao đổi",
            "Ngoại quốc - thương lượng",
        ],
        shippingNote: "LƯU Ý CÁC ĐƠN HÀNG ĐI NGOẠI QUỐC, " +
            "NGOẠI TỆ QUY ĐỔI SẼ TÙY THEO THỜI TIẾT CỦA QUỐC GIA ĐÓ. XIA XỊA"
    },
    {
        category: "COCOSTRAWS",
        name: "COCKTAIL",

        image: [
            Cocktail1,
            Cocktail3,
            Cocktail4,
            Cocktail5
        ],
        price: 50,
        description: "Là sản phẩm đáng tự hào của Ecolife, chúng tôi muốn cho công chúng biết là " +
            "dù là sống xanh không hề nhàm chán như mọi người tưởng. Hai phiên bản được tạo ra là đen bí ẩn " +
            "và trắng sang mịn. Có thể nói đây là một đạo cụ khi bạn muốn thu hút sự chú ý của đối phương tại nơi " +
            "có ánh sáng yếu hay hỗn loạn.",
        detail: [
            "Phù hợp với mọi loại đồ uống",
            "11 x 0.7 cm x 20 ống",
            "Làm từ nước dừa tự nhiên",
            "Phù hợp với đối tượng ngại ngùng chạm môi nhau"
        ],
        shippingPolicy: [
            "Nội thành - 20.000",
            "Ngoại thành - 35.000",
            "Quốc nội - trao đổi",
            "Ngoại quốc - thương lượng",
        ],
        shippingNote: "LƯU Ý CÁC ĐƠN HÀNG ĐI NGOẠI QUỐC, " +
            "NGOẠI TỆ QUY ĐỔI SẼ TÙY THEO THỜI TIẾT CỦA QUỐC GIA ĐÓ. XIA XỊA"
    },
    {
        category: "COCOSTRAWS",
        name: "TIẾT KIỆM",
        image: [
            OngFifty1,
            OngFifty3,
            OngFifty4,
            OngFifty5
        ],
        price: 60,
        description: "Nguyên liệu làm nên Cocostraws đã được nghiên cứu tìm hiểu," +
            "phân loại và quá trình chế biến và kiểm định chất lượng rất nhiều khâu nên " +
            "đảm bảo về chất lượng. Nước dừa được lấy từ xứ dừa Bến Tre trên lãnh thổ Việt Nam đạt tiêu chuẩn" +
            " nhất định để chạm được đến môi của người sử dụng.",
        detail: [
            "Phù hợp với mọi loại đồ uống",
            "22 x 0.7 cm x 50 ống",
            "Làm từ nước dừa tự nhiên",
            "Phù hợp với đối tượng ngại ngùng chạm môi nhau"
        ],
        shippingPolicy: [
            "Nội thành - 50.000",
            "Ngoại thành - 100.000",
            "Quốc nội - inbox thương lượng",
            "Ngoại quốc - email trao đổi",
        ],
        shippingNote: "LƯU Ý CÁC ĐƠN HÀNG ĐI NGOẠI QUỐC, " +
            "NGOẠI TỆ QUY ĐỔI SẼ TÙY THEO THỜI TIẾT CỦA QUỐC GIA ĐÓ. XIA XỊA"
    }
];

const testimonial = {
    title1: "BỀN BỈ TẬN 6 GIỜ ĐỒNG HỒ",
    text1: "Để tìm ra ma thuật thực tế này, " +
        "một tiến sĩ gốc Việt đã dành 12 giờ mỗi ngày, 6 ngày một tuần, liên tục trong 2 năm " +
        "để nghiên cứu ra phương pháp điều chế đặc biệt này và hoàn toàn thuận theo tự nhiên.",
    title2: "PHÂN HUỶ SAU 6 THÁNG",
    text2: "Để tìm ra ma thuật thực tế này, một tiến sĩ gốc Việt đã dành 12 giờ mỗi ngày, 6 ngày một tuần, liên tục trong 2 năm để nghiên " +
        "cứu ra phương pháp điều chế đặc biệt " +
        "này và hoàn toàn thuận theo tự nhiên."
}

class Product extends Component {
    product;

    constructor(props) {
        super(props);

    }


    state = {
        productDetailClicked: false,
        shippingPolicyClicked: false,
        orderClicked: false,
        showModal: false
    }

    handleProductDetailClick = () => {

        this.setState({
            productDetailClicked: !this.state.productDetailClicked
        });
        if (this.state.shippingPolicyClicked) {
            this.setState({
                shippingPolicyClicked: !this.state.shippingPolicyClicked
            })
        }
    }

    handleShippingPolicyClick = () => {
        this.setState({
            shippingPolicyClicked: !this.state.shippingPolicyClicked
        });
        if (this.state.productDetailClicked) {
            this.setState({
                productDetailClicked: !this.state.productDetailClicked
            })
        }
    }

    showProductDetail = (productDetails) => {
        return <ul style={{
            marginLeft: "16px", transition: "all 1s ease",
            opacity: !this.state.productDetailClicked ? 1 : 0.8
        }}>
            {productDetails.map((productDetail, index) => (
                <li style={{marginBottom: "8px"}} key={index}>{productDetail}</li>
            ))}
        </ul>;
    }

    showShippingPolicy = (shippingPolicies) => {
        return (shippingPolicies.map((shippingPolicy, index) => (
            <div style={{marginBottom: "8px"}} key={index}>
                {shippingPolicy.toUpperCase()}
            </div>
        )));
    }

    showShippingPolicyNote = (shippingNote) => {
        return (
            <div style={{marginTop: "32px", lineHeight: 2}}>
                {shippingNote}
            </div>
        );
    }

    showModal = () => {
        this.setState({showModal: !this.state.showModal })
    }

    render() {
        console.log(this.props);
        const id = this.props.match.params.name;
        this.product = products[id-1];


        return (
            <React.Fragment>
                {/*{this.state.showModal ? <Modal handleEventButton={this.showModal}/> : ""}*/}
                <div className="product">
                    <div className="product-detail-container" style={{backgroundImage: `url(${this.product.image[0]})`}}>
                        <div className="product-detail-description">
                            <div className="product-category">
                                {this.product.category}
                            </div>
                            <div className="product-name">
                                {this.product.name}
                            </div>
                            <div className="product-price">
                                {this.product.price}.000đ
                            </div>
                            <div className="product-description">
                                {this.product.description}
                            </div>
                            <div className="product-detail-title">
                                <div onClick={this.handleProductDetailClick}>
                                    CHI TIẾT SẢN PHẨM
                                    {this.state.productDetailClicked ?
                                        <IoMdArrowDropdown/> : <IoMdArrowDropright/>
                                    }
                                </div>
                            </div>
                            {
                                this.state.productDetailClicked ? this.showProductDetail(this.product.detail) : ""
                            }
                            <div className="product-detail-title">
                                <div onClick={this.handleShippingPolicyClick}>
                                    CHÍNH SÁCH VẬN CHUYỂN VÀ ĐỔI TRẢ
                                    {this.state.shippingPolicyClicked ?
                                        <IoMdArrowDropdown/> : <IoMdArrowDropright/>
                                    }
                                </div>
                            </div>
                            {
                                this.state.shippingPolicyClicked ? this.showShippingPolicy(this.product.shippingPolicy) : ""
                            }
                            {
                                this.state.shippingPolicyClicked ? this.showShippingPolicyNote(this.product.shippingNote) : ""
                            }
                        </div>
                    </div>
                    {/*<div className="product-purchase">*/}
                    {/*    <OutlineButton handleEventButton={this.showModal}>ĐẶT HÀNG</OutlineButton>*/}
                    {/*</div>*/}
                    <div>
                        <Testimonial img={this.product.image[1]} title={testimonial.title1} text={testimonial.text1}/>
                        <Testimonial backward={true} img={this.product.image[2]} title={testimonial.title2} text={testimonial.text2}/>
                    </div>
                    <div>
                        <img src={this.product.image[3]} alt="hình"/>
                    </div>
                    <div className="product-others">
                        XEM THỬ CÁC SẢN PHẨM KHÁC NHÉ
                    </div>
                    <div className="product-slider">
                        <MultipleSlider {...this.props}/>
                    </div>
                    <div className="back-to-home">
                        <button onClick={() => this.props.history.push("/")}>
                            VỀ TRANG CHỦ
                        </button>
                    </div>
                    <div className="back-to-top" onClick={() => scroll.scrollToTop()}>
                        <IoMdArrowDropup/> BACK TO TOP
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Product;
