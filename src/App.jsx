import {React, useRef, useLayoutEffect} from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";

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
        <div className="app-class">
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
