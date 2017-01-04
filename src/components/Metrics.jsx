import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';

import { fetchIssues } from '../actions/metrics';
import IssuesChart from './IssuesChart';

class Metrics extends Component {
  componentDidMount() {
    const { getIssues } = this.props;

    getIssues();
    // .then((issues) => {
    //   self.setState({ issues });
    // });

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
    const { issues } = this.props;
    return (
      <Box pad="medium">
        <Header >
          <Title>Metrics</Title>
        </Header>
        <Heading tag="h4">Issues (Open: {issues.filter(i => i.status === 'true').length})</Heading >
        <IssuesChart issues={issues} />
      </Box>
    );
  }
}

Metrics.propTypes = {
  issues: PropTypes.array,
  getIssues: PropTypes.func,
};

export default connect(
  state => ({ issues: state.issues }),
  { getIssues: fetchIssues })(Metrics);
