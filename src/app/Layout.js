import React from 'react';
import { ThemeProvider } from 'baseui';
import { Block } from 'baseui/block';
import { Display4 } from 'baseui/typography';
import { darkTheme } from './theme';


const Layout = ({ children }) => (
  <Block paddingBottom="scale600" width="100%">
    <Block
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={['40px', '80px', '100px']}

    >
      <Display4 color="#72D621"> Telzir </Display4>
    </Block>
    <ThemeProvider theme={darkTheme} />
    <Block display="flex" width="100%">
      {children}
    </Block>
  </Block>
);

export default Layout;
