import React from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Sidebar from 'grommet/components/Sidebar';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import User from 'grommet/components/icons/base/User';

const SideNavigation = () => (
  <Sidebar colorIndex="neutral-1">
    <Header pad="medium" justify="between" >
      <Title>Title</Title>
    </Header>
    <Box flex="grow" justify="start" >
      <Menu primary>
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    </Box>
    <Footer pad="medium">
      <Button icon={<User />} />
    </Footer>
  </Sidebar>
);

export default SideNavigation;
