import React from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Sidebar from 'grommet/components/Sidebar';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import Menu from 'grommet/components/Menu';
import User from 'grommet/components/icons/base/User';

import NavAnchor from './NavAnchor';

const SideNavigation = () => (
  <Sidebar colorIndex="neutral-1">
    <Header pad="medium" justify="between" >
      <Title>Corporate Dashboard</Title>
    </Header>
    <Box flex="grow" justify="start" >
      <Menu primary>
        <NavAnchor path="/issues">Issues</NavAnchor>
        <NavAnchor path="/metrics">Metrics</NavAnchor>
        <NavAnchor path="/branches">Branches</NavAnchor>
      </Menu>
    </Box>
    <Footer pad="medium">
      <Button icon={<User />} />
    </Footer>
  </Sidebar>
);

export default SideNavigation;
