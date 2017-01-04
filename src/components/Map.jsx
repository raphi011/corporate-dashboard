import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';

import GoogleMap from 'google-map-react';

import { fetchBranches } from '../actions/branches';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const branchStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};


class Branch extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div style={branchStyle}>
        {this.props.text}
      </div>
    );
  }
}

class Map extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    branches: PropTypes.any
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 1,
    branches: [],
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getBranches } = this.props;
    const self = this;

    // this.interval = setInterval(() => getBranches(), 10000);
  }

  render() {
    return (
      <GoogleMap
        apiKey='AIzaSyAjE_Wde51kvZmyROU9OppeVeXOvqysZ_Y'
        center={this.props.center}
        zoom={this.props.zoom}>
        {this.props.branches.map((b, i) => (
          <Branch key={i} {...b} />
        ))}
      </GoogleMap>
    );
  }
}

export default connect(
  state => ({ branches: state.branches }),
  { getBranches: fetchBranches })(Map);
