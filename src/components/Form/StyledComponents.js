import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

const Container = styled.div``;

const Error = styled.div``;

const Base = styled.form``;

const Title = styled.h1``;

const Text = styled.p``;

const TextSmall = styled.p``;

const Link = styled(ReachRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input``;

const Submit = styled.button``;

export {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
};
