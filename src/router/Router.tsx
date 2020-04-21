import React from "react"
import {Router, RouteComponentProps} from '@reach/router'
import Home from "../pages/home/Home";
import Products from "../pages/products/Product";
import Contact from "../pages/contact/Contact";
import {APP_ROUTES} from "./router.constants";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRouter";
import DashBoard from "../pages/dashboard/Dashboard";
import ProductDetail from "../pages/productDetail/ProductDetail";

export default () => (
    <Router>
        <Home path="/"/>
        <Login path={APP_ROUTES.LOGIN}/>
        <Products path={APP_ROUTES.PRODUCTS}/>
        <ProductDetail path={APP_ROUTES.CATEGORY_PRODUCTS}/>
        <Contact path={APP_ROUTES.CONTACT}/>
        <Register path={APP_ROUTES.REGISTER}/>
        <PrivateRoute component={DashBoard} path={APP_ROUTES.DASHBOARD}/>
    </Router>
);
