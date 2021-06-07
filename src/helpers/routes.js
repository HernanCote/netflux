/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const IsUserRedirect = ({
  user,
  loggedInPath,
  children,
  ...rest
}) => (
  <Route
    {...rest}
    render={() => (!user ? children : <Redirect to={{ pathname: loggedInPath }} />)}
  />
);

const ProtectedRoute = ({
  user,
  children,
  ...rest
}) => (
  <Route
    {...rest}
    render={({ location }) => (user
      ? children
      : (
        <Redirect
          to={{
            pathname: 'sign-in',
            state: { from: location },
          }}
        />
      ))}
  />
);

export {
  IsUserRedirect,
  ProtectedRoute,
};
