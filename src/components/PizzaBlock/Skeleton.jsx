import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="135" cy="140" r="125" />
    <rect x="0" y="287" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="340" rx="10" ry="10" width="280" height="88" />
    <rect x="127" y="447" rx="25" ry="25" width="155" height="45" />
    <rect x="0" y="452" rx="10" ry="10" width="95" height="30" />
  </ContentLoader>
);

export default Skeleton;
