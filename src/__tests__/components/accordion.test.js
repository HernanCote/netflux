/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import faqsData from '../../fixtures/faqs.json';
import Accordion from '../../components/Accordion';

describe('<Accordion />', () => {
  it('renders <Accordion /> with populated data', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map(item => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>,
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText(faqsData[0].header)).toBeTruthy();
    expect(getByText(faqsData[1].header)).toBeTruthy();
    expect(getByText(faqsData[2].header)).toBeTruthy();
    expect(getByText(faqsData[3].header)).toBeTruthy();
    expect(getByText(faqsData[4].header)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('opens and closes the <Accordion /> component', () => {
    const { container, queryByText, queryByTestId } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map(item => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body data-testid={item.id}>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>,
    );

    // eslint-disable-next-line quotes
    const whatIsNetfluxBodyText = faqsData[0].body;
    expect(queryByText(whatIsNetfluxBodyText)).toBeFalsy();
    fireEvent.click(queryByText(faqsData[0].header));
    expect(queryByTestId(1).innerHTML).toContain(whatIsNetfluxBodyText);

    fireEvent.click(queryByText(faqsData[0].header));
    expect(queryByText(whatIsNetfluxBodyText)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
