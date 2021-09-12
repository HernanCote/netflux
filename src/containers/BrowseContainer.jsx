import React, { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';

import { SelectProfilesContainer } from './ProfilesContainer';

import { FirebaseContext } from '../context';

import Loading from '../components/Loading';
import Header from '../components/Header';
import Card from '../components/Card';
import Player from '../components/Player';

import * as ROUTES from '../constants/routes';
import logo from '../netflux.svg';
import { FooterContainer } from './FooterContainer';

const BrowseContainer = ({
  slides,
}) => {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    if (searchTerm.length < 3) {
      setSlideRows(slides[category]);
      return;
    }
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <>
        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} alt="Netflux" src={logo} />
              <Header.TextLink
                active={category === 'series'}
                onClick={() => setCategory('series')}
              >
                Series
              </Header.TextLink>
              <Header.TextLink
                active={category === 'films'}
                onClick={() => setCategory('films')}
              >
                Films
              </Header.TextLink>
            </Header.Group>
            <Header.Group
              marginRight="2.5rem"
            >
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink>{user.displayName}</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink
                      onClick={() => firebase.auth().signOut()}
                    >
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
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
        <Card.Group>
          {slideRows.map(slideItem => (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map(item => (
                  <Card.Item key={item.docId} item={item}>
                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src="/videos/bunny.mp4" />
                </Player>
              </Card.Feature>
            </Card>
          ))}
        </Card.Group>
      </>
      <FooterContainer />
    </>
  ) : <SelectProfilesContainer user={user} setProfile={setProfile} />;
};

export { BrowseContainer };
