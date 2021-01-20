import React from 'react';

import {
  Row,
  Column,
  Link,
  Title,
  Container,
  Text,
  Break,
} from './StyledComponents';

const Footer = ({
  children,
  ...rest
}) => (
  <Container {...rest}>{children}</Container>
);

Footer.Row = function FooterRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...rest }) {
  return <Break {...rest}>{children}</Break>;
};

export default Footer;
