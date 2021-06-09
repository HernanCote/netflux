import React from 'react';

import Header from '../components/Header';
import Profiles from '../components/Profiles';

import * as ROUTES from '../constants/routes';
import logo from '../netflux.svg';

const SelectProfilesContainer = ({
  user,
  setProfile,
}) => {
  const handleClick = () => {};
  return (
    <>
      <Header background={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="Netflux" src={logo} />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who&apos;s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={handleClick}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};

export { SelectProfilesContainer };
