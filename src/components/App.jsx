import 'grommet/grommet.min.css';

import React, { PropTypes } from 'react';
import Container from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
// import { connect } from 'react-redux';

import * as actions from '../actions';

const App = () => {
  return (
    <Container>
      <Header pad="small" colorIndex="brand">
        <Title>Corporate Dashboard</Title>
      </Header>
    </Container>
  );
};

export default App;
