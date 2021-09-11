import React, { useState, useContext, createContext } from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Meta,
  Item,
  Image,
  Entities,
  Content,
  Feature,
  FeatureTitle,
  FeatureClose,
  Maturity,
  FeatureText,
} from './StyledComponents';

const FeatureContext = createContext();

function Card({ children, ...rest }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeatureContext.Provider value={{
      showFeature, setShowFeature, itemFeature, setItemFeature,
    }}
    >
      <Container {...rest}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...rest }) {
  return <Group {...rest}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...rest }) {
  return <SubTitle {...rest}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...rest }) {
  return <Meta {...rest}>{children}</Meta>;
};

Card.Entities = function CardEntities({ children, ...rest }) {
  return <Entities {...rest}>{children}</Entities>;
};

Card.Item = function CardItem({ item, children, ...rest }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...rest}
    >{children}
    </Item>
  );
};

Card.Image = function CardImage({ children, ...rest }) {
  return <Image {...rest} />;
};

Card.Feature = function CardFeature({ children, category, ...rest }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...rest}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="close" />
        </FeatureClose>

        <Group
          margin="1rem 0"
          alignItems="center"
          flexDirection="row"
        >
          <Maturity
            rating={itemFeature.maturity}
          >
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText>
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

export default Card;
