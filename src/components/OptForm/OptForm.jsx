import React from 'react';

import {
  Container,
  Input,
  Button,
  Text,
  Break,
} from './StyledComponents';

const OptForm = ({
  children,
  ...rest
}) => (
  <Container {...rest}>
    {children}
  </Container>
);

OptForm.Input = function OptFormInput({ ...rest }) {
  return <Input {...rest} />;
};

OptForm.Button = function OptFormButton({ children, ...rest }) {
  return (
    <Button {...rest}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...rest }) {
  return <Break {...rest} />;
};

export default OptForm;
