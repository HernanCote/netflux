import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  border-bottom: 0.5rem solid #222;
`;

const Inner = styled.div`
  display: flex;
  padding: 4.25rem 2.75rem;
  flex-direction: column;
  max-width: 50rem;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    line-height: 2.5rem;
  }
`;

const Item = styled.div`
  color: #fff;
  margin: auto;
  margin-bottom: 0.75rem;
  max-width: 41.75rem;
  width: 100%;

  &:first-of-type {
    margin-top: 3rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 1.75rem;
  font-weight: normal;
  background: #303030;
  padding: 0.75rem 1.25rem;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 1.5rem;

    @media (max-width: 600px) {
      width: 1rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Body = styled.div`
  max-height: 75rem;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 1.75rem;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.75rem 2.25rem 0.75rem 1.25rem;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
};
