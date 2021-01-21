import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5rem solid #222;
  text-align: center;
  padding: 10.25rem 2.75rem;
`;

const Title = styled.h1`
  color: white;
  max-width: 40rem;
  font-size: 3rem;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: normal;
  margin: 1rem auto;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export {
  Container,
  Title,
  Subtitle,
};
