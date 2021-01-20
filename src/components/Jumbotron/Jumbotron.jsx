import React from 'react';

import {
  Inner,
  Item,
  Container,
  Pane,
  Title,
  Subtitle,
  Image,
} from './StyledComponents';

const Jumbotron = ({
  children,
  direction = 'row',
  ...rest
}) => (
  <Item
    {...rest}
  >
    <Inner
      direction={direction}
    >
      {children}
    </Inner>
  </Item>
);

Jumbotron.Container = function JumbotronContainer({ children, ...rest }) {
  return (<Container {...rest}>{children}</Container>);
};

Jumbotron.Pane = function JumbotronPane({ children, ...rest }) {
  return (<Pane {...rest}>{children}</Pane>);
};

Jumbotron.Title = function JumbotronTitle({ children, ...rest }) {
  return (<Title {...rest}>{children}</Title>);
};

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...rest }) {
  return (<Subtitle {...rest}>{children}</Subtitle>);
};

Jumbotron.Image = function JumbotronImage({ ...rest }) {
  return <Image {...rest} />;
};

export default Jumbotron;
