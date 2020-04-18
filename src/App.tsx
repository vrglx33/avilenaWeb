import React from 'react';
import { Location } from '@reach/router';
import './App.css';
import { APP_ROUTES, AppRouterConfig } from './router';

function App() {
  return (
    <div className="App">
      <Location>
        {({ location }) => {
          if (location.pathname !== APP_ROUTES.LOGIN) {
            return (
                location.pathname !== APP_ROUTES.LOGIN && (
                    <AppRouterConfig />
                )
            );
          }
          return (
              location.pathname === APP_ROUTES.LOGIN && <AppRouterConfig />
          );
        }}
      </Location>
    </div>
  );
}

export default App;
