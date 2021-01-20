import styled from 'styled-components/macro';

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 68.75rem;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  display: flex;
  border-bottom: 0.5rem solid #222;
  padding: 3.25rem 5%;
  color: #fff;
  overflow: hidden;
`;

const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 3.25rem;
    }
  }
`;

const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 2.75rem;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3.25rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.75rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export {
  Inner,
  Container,
  Pane,
  Title,
  Subtitle,
  Image,
  Item,
};
