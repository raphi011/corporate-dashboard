import React, { Component } from 'react';


import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

import Map from './Map';

class Branches extends Component {
  render() {
    return (
      <Box full>
        <Header pad="medium" justify="between" >
          <Title>Branches</Title>
        </Header >
        <div style={{ width: '100%', height: '100%' }}>
          <Map />
        </div>
      </Box>
    );
  }
}

export default Branches;
