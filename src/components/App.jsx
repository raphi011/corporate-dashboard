import 'grommet/grommet.min.css';

import React, { PropTypes } from 'react';
import Container from 'grommet/components/App';
import Split from 'grommet/components/Split';

import SideNavigation from './SideNavigation';

const App = ({ children }) => (
  <Container centered={false}>
    <Split flex="right">
      <SideNavigation />
      {children}
    </Split>
  </Container>
);

App.propTypes = {
  children: PropTypes.any,
};

export default App;
