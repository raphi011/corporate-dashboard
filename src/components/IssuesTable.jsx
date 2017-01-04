import React, { Component } from 'react';

import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Timestamp from 'grommet/components/Timestamp';
import TextInput from 'grommet/components/TextInput';
import DateTime from 'grommet/components/DateTime';
import Select from 'grommet/components/Select';


class IssuesTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sortIndex: 0,
      sortAscending: true,
    };

    this.onSort = this.onSort.bind(this);
    this.filter = this.filter.bind(this);
    this.sort = this.sort.bind(this);
  }

  onSort(sortIndex, sortAscending) {
    this.setState({
      sortIndex,
      sortAscending,
    });
  }

  filter() {
    const {
      submittedFilter, customerNameFilter,
      customerEmailFilter, descriptionFilter,
      statusFilter, closedFilter, employeeFilter,
    } = this.state;

    const issues = this.props.issues.slice().filter(i => (
      (!submittedFilter || new Date(i.submissionTimestamp) > new Date(submittedFilter)) &&
      (!customerNameFilter || i.customerName.includes(customerNameFilter)) &&
      (!customerEmailFilter || i.customerEmail.includes(customerEmailFilter)) &&
      (!descriptionFilter || i.description.includes(descriptionFilter)) &&
      (!statusFilter || i.status === statusFilter.value) &&
      (!closedFilter || new Date(i.closedTimestamp) > new Date(closedFilter)) &&
      (!employeeFilter || i.employeeName.includes(employeeFilter))
    ));

    return issues;
  }

  sort(issues) {
    let compare;

    switch (this.state.sortIndex) {
      case 0: // submitted date
        compare = (a, b) =>
          new Date(b.submissionTimestamp) - new Date(a.submissionTimestamp);
        break;
      case 1: // customer name
        compare = (a, b) => b.customerName.localeCompare(a.customerName);
        break;
      case 2: // email
        compare = (a, b) => b.customerEmail.localeCompare(a.customerEmail);
        break;
      case 3: // description
        compare = (a, b) => b.description.localeCompare(a.description);
        break;
      case 4: // status
        compare = (a, b) => a.status.localeCompare(b.status);
        break;
      case 5: // closed date
        compare = (a, b) =>
          new Date(b.closedTimestamp) - new Date(a.closedTimestamp);
        break;
      case 6: // employee
        compare = (a, b) => b.employeeName.localeCompare(a.employeeName);
        break;

      default: break;
    }

    issues.sort(compare);

    if (!this.state.sortAscending) issues.reverse();
  }

  render() {
    const issues = this.filter();
    this.sort(issues);

    return (
      <Table>
        <TableHeader
          onSort={this.onSort}
          sortIndex={this.state.sortIndex}
          sortAscending={this.state.sortAscending}
          labels={IssuesTable.headers}
          />
        <tbody>
          <TableRow>
            <td><DateTime value={this.state.submittedFilter} onChange={submittedFilter => this.setState({ submittedFilter })} /></td>
            <td><TextInput onDOMChange={e => this.setState({ customerNameFilter: e.target.value })} /></td>
            <td><TextInput onDOMChange={e => this.setState({ customerEmailFilter: e.target.value })} /></td>
            <td><TextInput onDOMChange={e => this.setState({ descriptionFilter: e.target.value })} /></td>
            <td>
              <Select
                options={[{ value: 'false', label: 'Closed' }, { value: 'true', label: 'Open' }]}
                onChange={({ option }) => this.setState({ statusFilter: option })}
                value={this.state.statusFilter}
                />
            </td>
            <td><DateTime value={this.state.closedFilter} onChange={closedFilter => this.setState({ closedFilter })} /></td>
            <td><TextInput onDOMChange={e => this.setState({ employeeFilter: e.target.value })} /></td>
          </TableRow>
          {issues.map((issue) => {
            const open = issue.status === 'true';
            return (
              <TableRow key={issue.id}>
                <td><Timestamp value={issue.submissionTimestamp} /></td>
                <td>{issue.customerName}</td>
                <td>{issue.customerEmail}</td>
                <td>{issue.description}</td>
                <td>{open ? 'open' : 'closed'}</td>
                <td>{open ? null : (<Timestamp value={issue.closedTimestamp} />)}</td>
                <td>{issue.employeeName}</td>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

IssuesTable.headers = [
  'Submitted', 'Customer', 'Email',
  'Description', 'Status', 'Closed', 'Employee',
];

export default IssuesTable;
