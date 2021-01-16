import React from 'react';
import './Testimonial.scss';

const Testimonials = (props) => {

    const isBackward = props.backward;

    return (
        <React.Fragment>
            <div className={isBackward ? "testimonial-container container-backward" : "testimonial-container "}>
                <div className="testimonial-description">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="content">
                        {props.text}
                    </div>
                </div>
                <div className="testimonial-image">
                    <img src={props.img} alt="hình"/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Testimonials;
