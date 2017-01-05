import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';

import { fetchIssues } from '../actions/metrics';
import { fetchCustomers } from '../actions/customers';
import IssuesChart from './IssuesChart';
import CustomersChart from './CustomersChart';

class Metrics extends Component {
  componentDidMount() {
    const { getIssues, getCustomers } = this.props;

    getIssues();
    getCustomers();
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
    const { issues, customers } = this.props;
    return (
      <Box pad="medium" full>
        <Header >
          <Title>Metrics</Title>
        </Header>
        <Heading tag="h4">Issues (Open: {issues.filter(i => i.status === 'true').length})</Heading >
        <IssuesChart issues={issues} />
        <Heading tag="h4">Customers</Heading >
        <CustomersChart customers={customers} />
      </Box>
    );
  }
}

Metrics.propTypes = {
  issues: PropTypes.array,
  customers: PropTypes.array,
  getIssues: PropTypes.func,
  getCustomers: PropTypes.func,
};

export default connect(
  state => ({ issues: state.issues, customers: state.customers }),
  { getIssues: fetchIssues, getCustomers: fetchCustomers })(Metrics);
