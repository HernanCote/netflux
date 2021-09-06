import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  TextLink,
  Group,
  Picture,
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
} from './StyledComponents';

const Header = ({
  children,
  background = true,
  ...rest
}) => (
  background
    ? <Background {...rest}>{children}</Background>
    : (<>{ children }</>)
);

Header.Feature = function HeaderFeature({ children, ...rest }) {
  return <Feature {...rest}>{children}</Feature>;
};

Header.Frame = function HeaderFrame({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...rest }) {
  return <Group {...rest}>{children}</Group>;
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

Header.Text = function HeaderText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...rest }) {
  return <FeatureCallOut {...rest}>{children}</FeatureCallOut>;
};

Header.TextLink = function HeaderTextLink({ children, ...rest }) {
  return <TextLink {...rest}>{children}</TextLink>;
};

Header.Profile = function HeaderProfile({ children, ...rest }) {
  return <Profile {...rest}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...rest }) {
  return <Picture {...rest} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...rest }) {
  return <Dropdown {...rest}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...rest }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...rest}>
      <SearchIcon onClick={() => setSearchActive(prevState => !prevState)}>
        <img src="/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

export default Header;
