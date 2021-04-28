import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 41.25rem;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 0.25rem;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 28.25rem;
  padding: 3.75rem 4.25rem 2.5rem;
  margin-bottom: 6.25rem;
`;

const Error = styled.div`
  background: #e87c03;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  margin: 0 0 1rem;
  color: #fff;
  padding: 1rem 1.25rem;
`;

const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 28.25rem;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.75rem;
`;

const Text = styled.p`
  color: #737373;
  font-size: 1rem;
  font-weight: 500;
`;

const TextSmall = styled.p`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  line-height: normal;
  color: #8c8c8c;
`;

const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.input`
  background: #333;
  border-radius: 0.25rem;
  border: 0;
  color: #fff;
  height: 3.25rem;
  line-height: 3.25rem;
  padding: 0.25rem 1.25rem;
  margin-bottom: 1.25rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

const Submit = styled.button`
  background: #e50914;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  margin: 1.5rem 0 0.75rem;
  padding: 1rem;
  border: 0;
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

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
