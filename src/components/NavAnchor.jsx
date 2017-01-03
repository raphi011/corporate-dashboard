import React, { Component, PropTypes } from 'react';
import Anchor from 'grommet/components/Anchor';

// https://github.com/grommet/grommet/issues/576
export default class NavAnchor extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.context.router.push(this.props.path);
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { path } = this.props;
    const { router } = this.context;
    let className = this.props.className || '';
    if (router.isActive(path)) {
      className += ' active';
    }
    const href = router.createPath(path);
    return (
      <Anchor
        {...this.props}
        className={className}
        href={href}
        onClick={this.onClick}
        />
    );
  }
}

NavAnchor.propTypes = {
  ...Anchor.propTypes,
  onClick: PropTypes.func,
  path: PropTypes.string.isRequired,
};

NavAnchor.contextTypes = {
  router: PropTypes.object.isRequired,
};
