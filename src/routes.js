import React from 'react';
import { Route } from 'react-router-dom';
import { Home, ProductDetail, ShoppingCart } from './views';

const RouterApp = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/product-detail/:id" component={ProductDetail} />
            <Route path="/shopping-cart" component={ShoppingCart} />
        </div>
    );
}

export default RouterApp;