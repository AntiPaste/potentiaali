import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Questionnaire.css';

const propTypes = {
  incrementPhase: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  phase: PropTypes.number.isRequired,
};

class Questionnaire extends Component {
  selectChoice = (choice) => {
    const { questions, phase, incrementPhase } = this.props;
    const question = questions[phase - 1];

    const base = 'http://localhost:3000';
    fetch(`${base}/answer?question=${question.id}&choice=${choice}`);

    incrementPhase();
  }

  render() {
    const { questions, phase } = this.props;
    const question = questions[phase - 1];

    if (!question) return null;

    return (
      <div className="Questionnaire">
        <h3>Kysymys #{question.id}</h3>
        {question.choices.map(choice => (
          <div
            key={choice}
            className="choice-button"
            onClick={this.selectChoice.bind(null, choice)}
          >
            {choice}
          </div>
        ))}
      </div>
    );
  }
}

Questionnaire.propTypes = propTypes;

export default Questionnaire;
