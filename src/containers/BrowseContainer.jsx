import React, { useContext, useState, useEffect } from 'react';

import { SelectProfilesContainer } from './ProfilesContainer';

import { FirebaseContext } from '../context';

import Loading from '../components/Loading';
import Header from '../components/Header';

const BrowseContainer = ({
  slides,
}) => {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return (
    <>
      <>
        {profile.displayName
          && (loading
            ? <Loading src={user.photoURL} />
            : <Loading.ReleaseBody />)}
        <Header src="joker1">Header content goes here</Header>
      </>
      {!profile.displayName && (
        <SelectProfilesContainer
          user={user}
          setProfile={setProfile}
        />
      )}
    </>
  );
};

export { BrowseContainer };
