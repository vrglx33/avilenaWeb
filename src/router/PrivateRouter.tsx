import React from 'react';
import { Redirect } from '@reach/router';
import authService from "../core/auth/auth.service";
import {APP_ROUTES} from "./router.constants";

// @ts-ignore
const PrivateRoute = ({ component: PageComponent, ...rest }) => {
    if (!authService.isLoggedInUser()) {
        // @ts-ignore
        return <Redirect to={APP_ROUTES.LOGIN} />;
    }
    return <PageComponent {...rest} />;
};

export default PrivateRoute;
