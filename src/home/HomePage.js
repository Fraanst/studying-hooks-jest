import React from 'react';

import Layout from '../app/Layout';
import LayoutBody from '../app/LayoutBody';
import HomeGrid from './HomeGrid';

const PATH = '/Planos';
const HomePage = () => (
  <Layout>
    <LayoutBody>
      <HomeGrid />
    </LayoutBody>
  </Layout>
);

export { PATH };
export default HomePage;
