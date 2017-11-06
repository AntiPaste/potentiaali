import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SkillSelection.css';

import SkillButton from './SkillButton';

const propTypes = {
  incrementPhase: PropTypes.func.isRequired,
};

class SkillSelection extends Component {
  chooseSkill = (skill) => {
    this.props.incrementPhase();
    fetch(`http://localhost:3000/skill?skill=${skill}`);
  };

  render() {
    return (
      <div className="SkillSelection">
        <SkillButton onClick={this.chooseSkill.bind(null, 6)}>
          Osaan Reactia ja Vue.js:ää
        </SkillButton>
        <SkillButton onClick={this.chooseSkill.bind(null, 5)}>
          Osaan Reactia mutta en osaa Vue.js:ää
        </SkillButton>
        <SkillButton onClick={this.chooseSkill.bind(null, 4)}>
          En osaa Reactia mutta osaan Vue.js:ää
        </SkillButton>
        <SkillButton onClick={this.chooseSkill.bind(null, 3)}>
          En osaa kumpaakaan, mutta olen kuullut molemmista
        </SkillButton>
        <SkillButton onClick={this.chooseSkill.bind(null, 2)}>
          En osaa kumpaakaan, mutta olen kuullut Reactista
        </SkillButton>
        <SkillButton onClick={this.chooseSkill.bind(null, 1)}>
          En osaa kumpaakaan, mutta olen kuullut Vue.js:stä
        </SkillButton>
        <SkillButton onClick={this.chooseSkill.bind(null, 0)}>
          En ole kuullut kummastakaan, onko React jotain syötävää?
        </SkillButton>
      </div>
    );
  }
}

SkillSelection.propTypes = propTypes;

export default SkillSelection;
