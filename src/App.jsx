import React from 'react';

import './App.scss';
import Header from './components/header/Header1';
import Slider from './components/slider/Slider';
import Test from './components/slider/Test';
import NavBar from "./components/navbar/NavBar";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import HomePage from "./scenes/homepage/HomePage";
import AboutUs from "./scenes/about-us/AboutUs";
import Products from "./scenes/products/Products";
import {useMediaQuery} from "react-responsive/src";


const App = () => {
    const isDesktop = useMediaQuery({ minWidth: 992 })

    return (
        <div>
            <BrowserRouter>
                {isDesktop ? <Header/> : <NavBar/>}
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/products" component={Products}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
