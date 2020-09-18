import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShareButton extends Component {
  render() {
    return <button></button>;
  }
}

ShareButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};
export default ShareButton;
