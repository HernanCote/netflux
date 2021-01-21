import React from 'react';

import {
  Container,
  Title,
  Subtitle,
} from './StyledComponents';

const Feature = ({
  children,
  ...rest
}) => (
  <Container {...rest}>{children}</Container>
);

Feature.Title = function FeatureTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Feature.Subtitle = function FeatureSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

export default Feature;
