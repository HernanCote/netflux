import styled, { css } from 'styled-components/macro';

import { Link as ReactRouterLink } from 'react-router-dom';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: 
    url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
  
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && css`
      background: none;
    `}
  }
`;

const Container = styled.div`
  display: flex;
  height: 4rem;
  padding: 1.25rem;
  justify-content: space-between;
  align-items: center;
  
  a {
    display: flex;
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

const Feature = styled(Container)`
  padding: 9.5rem 0 31.25rem 4rem;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const Text = styled.p`
  color: white;
  font-size: 1.375rem;
  line-height: normal;
  text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.45);
  margin: 0;
`;

const FeatureCallOut = styled.h2`
  color: white;
  font-size: 3.25rem;
  font-weight: bold;
  line-height: normal;
  text-shadow: 2px 2px 4px rgb(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 1.2rem;
`;

const TextLink = styled.p`
  color: #FFF;
  text-decoration: none;
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
  cursor: pointer;
  margin-right: 2rem;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  display: none;
  background-color: #000;
  position: absolute;
  padding: 0.75rem;
  width: 6.25rem;
  top: 2rem;
  right: 0.5rem;

  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 0.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${TextLink}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 0.5rem;
  }

  p {
    font-size: 0.75rem;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  position: relative;
  
  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #FFF;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 1rem;
  }
`;

const SearchInput = styled.input`
  background-color: #44444459;
  color: #FFF;
  border: 1px solid #FFF;
  transition: width 0.5s;
  height: 1.75rem;
  font-size: 0.75rem;
  margin-left: ${({ active }) => (active ? '0.55rem' : '0')};
  padding: ${({ active }) => (active ? '0 0.55rem' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  width: ${({ active }) => (active ? '12.5rem' : '0')};
`;

const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  font-weight: bold;
  border-width: 0;
  padding: 0.65rem 1.1rem;
  border-radius: 5px;
  max-width: 8rem;
  font-size: 1.25rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #FF1E1E;
    color: #FFF;
  }
`;

export {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  TextLink,
  Group,
  Picture,
  Profile,
  Dropdown,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
};
