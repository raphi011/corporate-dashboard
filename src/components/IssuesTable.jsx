import React from 'react';

import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

const IssuesTable = ({ issues }) => (
  <Table>
    <thead>
      <tr>
        <th>
          Text
      </th>
        <th>
          Author
      </th>
        <th>
          Finished
      </th>
        <th>
          Tags
      </th>
      </tr>
    </thead>
    <tbody>
      {issues.map((issue, key) => (
        <TableRow key={key}>
          <td>{issue.text}</td>
          <td>{issue.author}</td>
          <td>{issue.finished}</td>
          <td>{issue.tags}</td>
        </TableRow>
      ))}
    </tbody>
  </Table>
);

export default IssuesTable;
