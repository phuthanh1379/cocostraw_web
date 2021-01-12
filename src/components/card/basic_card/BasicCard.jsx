import React from 'react';

import './BasicCard.scss'

function BasicCard(props) {
    return (
        <div className='basic-card-container'>
            <div className='slider-bg'>
                <img src={props._imgLink} alt="alt-name" />
            </div>
        </div>
    );
}

//const BasicCard = () => {    
//    // const displayStyle = this.props._visible;
//    return (
//        <div className='card-container'
//            style={{display: this.props._visible}}
//        >
//            <div className='card-body'>
//                <div className='card-side side-front'>
//                    <div className='container-fluid'>
//                        <div className='row'>
//                            <div className='col-xs-6'>
//                                <img src={this.props._imgLink} alt="alt-name"/>
//                            </div>
    
//                            <div className='col-xs-6 side-front-content'>
//                                <h2>{this.props._author}</h2>
    
//                                <h1>{this.props._job}</h1>
    
//                                <p>{this.props._bio}</p>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </div>
//    );
//};

export default BasicCard;