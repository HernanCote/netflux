import React from 'react';
import Header from '../components/Header';

import logo from '../logo.svg';

import * as ROUTES from '../constants/routes';

const HeaderContainer = ({
  children,
}) => (
  <Header>
    <Header.Frame>
      <Header.Logo to={ROUTES.HOME} alt="Netflux" src={logo} />
      <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
    </Header.Frame>
    {children}
  </Header>
);

export {
  // eslint-disable-next-line import/prefer-default-export
  HeaderContainer,
};
