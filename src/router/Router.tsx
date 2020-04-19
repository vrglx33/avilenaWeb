import React from "react"
import {Router, RouteComponentProps} from '@reach/router'
import Home from "../pages/home/Home";
import Products from "../pages/products/Product";
import Contact from "../pages/contact/Contact";

export default () => (
    <Router>
        <Home path="/"/>
        <Home path="/dashboard"/>
        <Products path="products"/>
        <Contact path="contact"/>
    </Router>
);
