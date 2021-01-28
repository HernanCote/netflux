import React, { useState } from 'react';
import Form from '../../components/Form';

import {
  HeaderContainer as Header,
  FooterContainer as Footer,
} from '../../containers';

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  return (
    <>
      <Header>
        <Form>
          <Form.Title>
            Sign In
          </Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
        </Form>
      </Header>
      <Footer />
    </>
  );
};

export default SignIn;
