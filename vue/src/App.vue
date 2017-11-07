<template>
  <div id="app">
    <h1>Potentiaali - Vue.js</h1>

    <SkillSelection v-if="!phase" @incrementPhase="incrementPhase" />
    <Questionnaire
      v-else
      :phase="phase"
      :questions="questions"
      @incrementPhase="incrementPhase"
    />
  </div>
</template>

<script>
import * as config from './config';

import SkillSelection from './components/SkillSelection';
import Questionnaire from './components/Questionnaire';

export default {
  name: 'app',
  components: {
    SkillSelection,
    Questionnaire,
  },
  data() {
    return {
      questions: [],
      phase: parseInt(localStorage.getItem('phase'), 10) || 0,
    };
  },
  created() {
    fetch(config.BASE_URL)
      .then(response => response.json())
      .then((data) => { this.questions = data; });
  },
  methods: {
    incrementPhase() {
      this.phase += 1;
      localStorage.setItem('phase', this.phase);
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
