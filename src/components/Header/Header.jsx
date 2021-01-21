import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Background,
  Container,
  Logo,
  ButtonLink,
} from './StyledComponents';

const Header = ({
  children,
  background = true,
  ...rest
}) => (
  background ? <Background {...rest}>{children}</Background> : { children }
);

Header.Frame = function HeaderFrame({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...rest }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...rest} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...rest }) {
  return <ButtonLink {...rest}>{children}</ButtonLink>;
};

export default Header;
