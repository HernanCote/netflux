import React from 'react';

import OptForm from '../../components/OptForm';
import Feature from '../../components/Feature';

import {
  JumbotronContainer as Jumbotron,
  FooterContainer as Footer,
  FaqsContainer as Faqs,
  HeaderContainer as Header,
} from '../../containers';

const Home = () => (
  <>
    <Header>
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Try It Now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>Ready to watch? Enter your email or restart your membership</OptForm.Text>
        </OptForm>
      </Feature>
    </Header>
    <Jumbotron />
    <Faqs />
    <Footer />
  </>
);

export default Home;
