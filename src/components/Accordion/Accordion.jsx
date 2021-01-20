/* eslint-disable no-shadow */
import React, {
  createContext,
  useState,
  useContext,
} from 'react';

import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
} from './StyledComponents';

const ToggleContext = createContext();

const Accordion = ({
  children,
  ...rest
}) => (
  <Container
    {...rest}
  >
    <Inner>{children}</Inner>
  </Container>
);

Accordion.Title = function AccordionTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...rest }) {
  const [show, setShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ show, setShow }}>
      <Item {...rest}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...rest }) {
  const { show, setShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setShow(show => !show)} {...rest}>
      {children}
      {show ? <img src="images/icons/close-slim.png" alt="close" /> : <img src="images/icons/add.png" alt="open" /> }
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...rest }) {
  const { show } = useContext(ToggleContext);
  return show ? <Body {...rest}>{children}</Body> : null;
};

export default Accordion;
