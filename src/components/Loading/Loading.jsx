import React from 'react';

import {
  Spinner,
  LockBody,
  ReleaseBody,
  Picture,
} from './StyledComponents';

const Loading = ({
  src,
  ...rest
}) => (
  <Spinner {...rest}>
    <LockBody />
    <Picture src={`/images/users/${src}.png`} />
  </Spinner>
);

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

export default Loading;
