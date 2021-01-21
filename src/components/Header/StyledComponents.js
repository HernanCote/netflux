import styled from 'styled-components/macro';

import { Link as ReactRouterLink } from 'react-router-dom';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: 
    url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
  
`;

const Container = styled.div`
  display: flex;
  margin: 0 3.5rem;
  height: 4rem;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;
  
  a {
    display: flex;
  } 

  @media (max-width: 1000px) {
    margin: 0 2rem;
  }
`;

const Logo = styled.img`
  height: 2rem;
  width: 6.75rem;
  margin-right: 2.5rem;

  @media (min-width: 1449px) {
    height: 2.75rem;
    width: 20.5rem;
  }
`;

const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #E50914;
  width: 5.25rem;
  height: fit-content;
  color: #FFF;
  border: 0;
  font-size: 1rem;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #F40612;
  }
`;

export {
  Background,
  Container,
  Logo,
  ButtonLink,
};
