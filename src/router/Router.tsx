import React from "react"
import {Router, RouteComponentProps} from '@reach/router'
import Home from "../pages/home/Home";
import Products from "../pages/products/Product";
import Contact from "../pages/contact/Contact";
import {APP_ROUTES} from "./router.constants";
import Login from "../pages/login/Login";

export default () => (
    <Router>
        <Home path="/"/>
        <Login path={APP_ROUTES.LOGIN}/>
        <Products path={APP_ROUTES.PRODUCTS}/>
        <Contact path={APP_ROUTES.CONTACT}/>
    </Router>
);
