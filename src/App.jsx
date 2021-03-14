import { React } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

import './App.scss';
// Components
import Header from './components/header/Header';
// Pages
import HomePage from "./scenes/homepage/HomePage";
import Product from "./scenes/product/Product";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const App = () => {
    return (
        <div className="app-class">
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/product/:name" render={(props) => <Product {...props} />} />
                </Switch>
                <MessengerCustomerChat
                    pageId="944516855575691" appId="app ID"
                />
            </BrowserRouter>
        </div>
    );
};

export default App;
