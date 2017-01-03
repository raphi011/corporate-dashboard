import 'grommet/grommet.min.css';

import React, { PropTypes } from 'react';
import Container from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';

import SideNavigation from './SideNavigation';

const App = ({ children }) => (
  <Container centered={false}>
    <Split>
      <SideNavigation />
      {children}
    </Split>
  </Container>
);

App.propTypes = {
  children: PropTypes.arrayOf(PropTypes.obj),
};

export default App;
