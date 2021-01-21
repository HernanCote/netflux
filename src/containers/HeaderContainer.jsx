import React from 'react';
import { Header } from '../components/Accordion';

const HeaderContainer = () => (
  <Header>
    <Header.Frame>
      <Header.Logo />
      <Header.Button />
    </Header.Frame>
  </Header>
);

export {
  // eslint-disable-next-line import/prefer-default-export
  HeaderContainer,
};
