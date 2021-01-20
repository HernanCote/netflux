import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 1.25rem;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  max-width: 28.25rem;
  width: 100%;
  border: 0;
  padding: 0.5rem;
  height: 3.5rem;
  box-sizing: border-box;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: white;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 3.5rem;
  background: #e50914;
  color: #fff;
  text-transform: uppercase;
  padding: 0 2rem;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;

  &:hover { 
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 3rem;
    font-size: 1rem;
    margin-top: 1.25rem;
    font-weight: bold;
  }

  img {
    margin-left: 0.0.rem;
    filter: brightness(0) invert(1);
    width: 1.5rem;

    @media (max-width: 1000px) {
      width: 1rem;
    }
  }
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0%;
`;

export {
  Container,
  Input,
  Button,
  Text,
  Break,
};
