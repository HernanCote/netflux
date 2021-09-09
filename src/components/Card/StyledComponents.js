import styled from 'styled-components/macro';

const Title = styled.p`
  font-size: 1.5rem;
  color: #E5E5E5;
  font-weight: bold;
  margin: 0 3.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 1.75rem;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  margin: ${({ margin }) => margin && margin};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -9.25rem;
    }
  }
`;

const SubTitle = styled.p`
  font-size: 12px;
  color: #FFF;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

const Text = styled.p`
  margin-top: 0.25rem;
  font-size: 10px;
  color: #FFF;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  color: #FFF;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  
  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: cover;
  position: relative;
  height: 15.5rem;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: #000;

  @media (min-width: 1000px) {
    height: 22.5rem;
    height: auto;
    background-size: contain;
    
    ${Title} {
      font-size: 1.2rem;
      line-height: 1.25rem;
      margin-bottom: 0.5rem;
    }

    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

const FeatureClose = styled.button`
  color: #FFF;
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;
  background-color: transparent;
  cursor: pointer;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 1.5rem;
  }
`;

const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#9F0000' : '#007A00')};
  border-radius: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0.25rem;
  text-align: center;
  color: #FFF;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 0.5rem;
  font-size: 12px;
  line-height: 1.7;
`;

const Content = styled.div`
  margin: 3.5rem;
  max-width: 31.25rem;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 1.75rem;
    max-width: none;
  }
`;

const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 0.5rem;
  background-color: #0000008F;

`;

const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

const Item = styled.p`
  display: flex;
  flex-direction: column;
  margin-right: 0.25rem;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    } 
  }

  &:first-of-type {
    margin-left: 3.5rem;
    @media (max-width: 1000px) {
      margin-left: 1.8rem;
    }
  }

  &:last-of-type {
    margin-right: 3.5rem;
    @media (max-width: 1000px) {
      margin-right: 1.8rem;
    }
  }
`;

const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 19rem;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

export {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
};
