import React from 'react';

import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './StyledComponents';

const Form = ({
  children,
  ...rest
}) => (
  <Container {...rest}>{children}</Container>
);

Form.Error = function FormError({ children, ...rest }) {
  return <Error {...rest}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...rest }) {
  return <Base {...rest}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Form.Text = function FormText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...rest }) {
  return <TextSmall {...rest}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...rest }) {
  return <Input {...rest}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...rest }) {
  return <Submit {...rest}>{children}</Submit>;
};

export default Form;
