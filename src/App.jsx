import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {useMediaQuery} from "react-responsive/src";

import './App.scss';
// Components
import Header from './components/header/Header';
import NavBar from "./components/navbar/NavBar";
// Pages
import AboutUs from "./scenes/about-us/AboutUs";
import HomePage from "./scenes/homepage/HomePage";
import Products from "./scenes/products/Products";


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
