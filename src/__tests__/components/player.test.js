/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Player from '../../components/Player';

describe('<Player />', () => {
  it('renders player with video', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button />
        <Player.Video src="videos/bunny.mp4" />
      </Player>,
    );

    expect(queryByTestId('player')).toBeFalsy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeTruthy();
    fireEvent.click(queryByTestId('player'));

    expect(queryByTestId('player')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
