import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {useMediaQuery} from "react-responsive/src";

import './App.scss';
// Components
import Header from './components/header/Header';
import NavBar from "./components/navbar/NavBar";
// Pages
import HomePage from "./scenes/homepage/HomePage";
import Product from "./scenes/product/Product";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";


const App = () => {
    // const isDesktop = useMediaQuery({ minWidth: 992 })

    return (
        <div>
            <BrowserRouter>
                <ScrollToTop/>
                {/*{isDesktop ? <Header/> : <NavBar/>}*/}
                <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/product/:name" render={(props) => <Product {...props}/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
