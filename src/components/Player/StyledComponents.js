import styled from 'styled-components/macro';

const Container = styled.div``;

const Button = styled.button`
  background-color: #e50914;
  border-color: #FF0A10;
  width: 7rem;
  height: 2.75rem;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;

  &:hover {
    transform: scale(1.05);
    background-color: #FF0A16;
  }
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0,0,0, 0.5);
  margin: 0 1.25rem;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 56.25rem;
  margin: auto;

  video { 
    height: 100%;
    width: 100%;
  }
`;

const Close = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  opacity: 0.3;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 0.5rem;
    top: 0;
    content: '+';
    height: 1.25rem;
    width: 1.25rem;
    background-color: #333;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export {
  Container,
  Button,
  Overlay,
  Inner,
  Close,
};
