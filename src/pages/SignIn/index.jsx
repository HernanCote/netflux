import React, { useState } from 'react';
import Form from '../../components/Form';

import {
  HeaderContainer as Header,
  FooterContainer as Footer,
} from '../../containers';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitHandler = e => {
    e.preventDefault();
  };

  const isInvalid = password === '' || email === '';

  return (
    <>
      <Header>
        <Form>
          <Form.Title>
            Sign In
          </Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={submitHandler}>
            <Form.Input
              placeholder="Email Address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
            >Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflux? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCaptcha to ensure you are not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </Header>
      <Footer />
    </>
  );
};

export default SignIn;
