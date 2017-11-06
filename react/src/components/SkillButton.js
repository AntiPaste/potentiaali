import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SkillButton.css';

const propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};

class SkillButton extends Component {
  render() {
    const { children, onClick } = this.props;

    return (
      <div className="SkillButton" onClick={onClick}>
        {children}
      </div>
    );
  }
}

SkillButton.propTypes = propTypes;

export default SkillButton;
