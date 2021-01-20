import React from 'react';
import Accordion from '../components/Accordion';

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
  </Accordion>
);

export {
  // eslint-disable-next-line import/prefer-default-export
  FaqsContainer,
};
