import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
`;

const Title = styled.h1`
  width: 100%;
  color: #e5e5e5;
  font-size: 3rem;
  text-align: center;
  font-weight: 500;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

const Picture = styled.img`
  width: 100%;
  max-width: 9.25rem;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 1rem;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

const Item = styled.li`
  max-height: 12.5rem;
  max-width: 12.5rem;
  list-style-type: none;
  text-align: center;
  margin-right: 1.75rem;

  &:hover > ${Picture} {
    border: 3px solid #e5e5e5;;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: #e5e5e5;
  }
  
  &:last-of-type {
    margin-right: 0;
  }
`;

export {
  Container,
  Title,
  List,
  Name,
  Picture,
  Item,
};
