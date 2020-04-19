import React from 'react';
import {Location} from '@reach/router';
import './App.css';
import {APP_ROUTES, AppRouterConfig} from './router';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {Navigation} from "./components/navigation/Navigation";

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#cc3233",
        },
        secondary: {
            // This is green.A700 as hex.
            main: "#000000",
        },
    },
});
function App() {
    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            <Location>
                {({location}) => {
                    if (location.pathname !== APP_ROUTES.LOGIN) {
                        return (
                            location.pathname !== APP_ROUTES.LOGIN && (
                                <Navigation title="Salsamentaria Avileña">
                                    <AppRouterConfig/>
                                </Navigation>
                            )
                        );
                    }
                    return (
                        location.pathname === APP_ROUTES.LOGIN && <AppRouterConfig/>
                    );
                }}
            </Location>
        </div>
        </ThemeProvider>
    );
}

export default App;
