import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

import IssuesTable from './IssuesTable';
import { fetchIssues } from '../actions/metrics';

class Issues extends Component {
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
      <Box>
        <Header pad="medium" >
          <Title>Issues</Title>
          <Box justify="end" direction="row" responsive={false} flex>
            <div style={{ width: '100%' }} />
          </Box>
        </Header>
        <IssuesTable issues={issues} />
      </Box>
    );
  }
}

Issues.propTypes = {
  issues: PropTypes.array,
  getIssues: PropTypes.func,
};

export default connect(
  state => ({ issues: state.issues }),
  { getIssues: fetchIssues })(Issues);
