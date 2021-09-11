/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Button,
  Overlay,
  Inner,
  Close,
} from './StyledComponents';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...rest }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
      <Overlay {...rest} onClick={() => setShowPlayer(false)} data-testid="player">
        <Inner>
          <video id="netflux-player" controls>
            <source src={src} type="video/mp4" />
          </video>
          <Close />
        </Inner>
      </Overlay>,
      document.body,
    )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    // eslint-disable-next-line no-shadow
    <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};
