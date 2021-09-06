import React, { useContext, useState, useEffect } from 'react';

import { SelectProfilesContainer } from './ProfilesContainer';

import { FirebaseContext } from '../context';

import Loading from '../components/Loading';
import Header from '../components/Header';

import * as ROUTES from '../constants/routes';
import logo from '../netflux.svg';

const BrowseContainer = ({
  slides,
}) => {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <>
        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} alt="Netflux" src={logo} />
              <Header.TextLink>Series</Header.TextLink>
              <Header.TextLink>Films</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink>{user.displayName}</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => firebase.auth().signOut()}>
                      Sign Out
                    </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks
              connection as he walks the streets of Gotham City. Arthur wears two masks and
              -- the one that paints for his day job as a clown, and the guise he projects in
              a futile attempt to feel like he&apos;s part of the world around him.
            </Header.Text>
          </Header.Feature>
        </Header>
      </>
    </>
  ) : <SelectProfilesContainer user={user} setProfile={setProfile} />;
};

export { BrowseContainer };
