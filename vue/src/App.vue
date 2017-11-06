<template>
  <div id="app">
    <h1>Potentiaali - Vue.js</h1>

    <SkillSelection v-if="!phase" v-on:incrementPhase="incrementPhase" />
    <Questionnaire v-if="phase" :phase="phase" :questions="questions" v-on:incrementPhase="incrementPhase" />
  </div>
</template>

<script>
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
    fetch('http://localhost:3000')
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

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
