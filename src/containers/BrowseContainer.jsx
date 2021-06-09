import React, { useContext, useState } from 'react';

import { SelectProfilesContainer } from './ProfilesContainer';

import { FirebaseContext } from '../context';

const BrowseContainer = ({
  slides,
}) => {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const [profile, setProfile] = useState({});

  return (
    <SelectProfilesContainer
      user={user}
      setProfile={setProfile}
    />
  );
};

export { BrowseContainer };
