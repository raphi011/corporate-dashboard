import React, { Component } from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import FilterControl from 'grommet-addons/components/FilterControl';

import IssuesTable from './IssuesTable';
import { getIssues } from '../api';

class Issues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issues: [],
    };
  }

  componentDidMount() {
    getIssues().then((issues) => {
      self.setState({ issues });
    });

    // const self = this;

    // this.interval = setInterval(() => getIssues().then((issues) => {
    //   self.setState({ issues });
    // }),
    //   10000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    return (
      <Box>
        <Header pad="medium" >
          <Title>Issues</Title>
          <Box justify="end" direction="row" responsive={false} flex>
            <div style={{ width: '100%' }} />
            <Menu dropAlign={{ right: 'right' }} >
              <FilterControl unfilteredTotal={100} filteredTotal={50} onClick={() => console.log('filter!')} />
            </Menu>
          </Box>
        </Header>
        <IssuesTable issues={this.state.issues} />
      </Box>
    );
  }
}

export default Issues;
