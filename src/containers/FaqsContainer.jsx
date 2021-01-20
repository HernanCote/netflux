import React from 'react';
import Accordion from '../components/Accordion';
import OptForm from '../components/OptForm/OptForm';

import faqsData from '../fixtures/faqs.json';

const FaqsContainer = () => (
  <Accordion>
    <Accordion.Title>Frequently Asked Questions </Accordion.Title>
    {faqsData.map(item => (
      <Accordion.Item key={item.id}>
        <Accordion.Header>{item.header}</Accordion.Header>
        <Accordion.Body>{item.body}</Accordion.Body>
      </Accordion.Item>
    ))}

    <OptForm>
      <OptForm.Input placeholder="Email Address" />
      <OptForm.Button>Try It Now</OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>Ready to watch? Enter your email or restart your membership</OptForm.Text>
    </OptForm>
  </Accordion>
);

export {
  // eslint-disable-next-line import/prefer-default-export
  FaqsContainer,
};
