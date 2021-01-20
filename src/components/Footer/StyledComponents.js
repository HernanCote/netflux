import styled, { css } from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  padding: 4.25rem 3.5rem;
  margin: auto;
  max-width: 62.5rem;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 4.25rem 2rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  grid-gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
  }
`;

const Link = styled.a`
  color: #757575;
  margin-bottom: 1.25rem;
  font-size: 0.75rem;
  text-decoration: none;
`;

const commonTextStyles = css`
  font-size: 1rem;
  color: #757575;
  margin-bottom: 2.5rem;
`;

const Title = styled.p`
  ${commonTextStyles};
`;

const Text = styled.p`
  ${commonTextStyles};
`;

const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;

export {
  Container,
  Column,
  Row,
  Link,
  Title,
  Text,
  Break,
};
