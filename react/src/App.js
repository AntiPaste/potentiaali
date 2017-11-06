import React, { Component } from 'react';

import SkillSelection from './components/SkillSelection';
import Questionnaire from './components/Questionnaire';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phase: parseInt(localStorage.getItem('phase'), 10) || 0,
      questions: [],
    };
  }

  componentWillMount() {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then((questions) => { this.setState({ questions }); });
  }

  incrementPhase = () => {
    const { phase } = this.state;
    this.setState({ phase: phase + 1});
    localStorage.setItem('phase', phase + 1);
  };

  render() {
    const { phase, questions } = this.state;

    return (
      <div className="App">
        <h1>Potentiaali - React</h1>

        {phase ?
          <Questionnaire
            phase={phase}
            questions={questions}
            incrementPhase={this.incrementPhase}
          /> :
          <SkillSelection
            incrementPhase={this.incrementPhase}
          />
        }
      </div>
    );
  }
}

export default App;
