import React, {Component} from 'react';

import SimpleSlider from "../../components/slider/SimpleSlider";

class HomePage extends Component {
    render() {
        return (
            <div className="homepage top">
                {/*<h1>Home Page</h1>*/}
                <SimpleSlider/>
            </div>
        );
    }
}

export default HomePage;