<template>
  <div v-if="question">
    <h3>Kysymys #{{ question.id }}</h3>

    <div
      class="choice-button"
      v-for="choice in question.choices"
      @click="selectChoice(choice)"
    >
      {{ choice }}
    </div>
  </div>
</template>

<script>
import * as config from '../config';

export default {
  name: 'Questionnaire',
  props: {
    phase: Number,
    questions: Array,
  },
  methods: {
    selectChoice(choice) {
      const { id } = this.question;

      fetch(`${config.BASE_URL}/answer?question=${id}&choice=${choice}`);
      this.$emit('incrementPhase');
    },
  },
  computed: {
    question() {
      return this.questions[this.phase - 1];
    },
  },
};
</script>

<style scoped>
.choice-button {
  margin: 10px;
  padding: 10px;
  font-size: 1.5em;
  cursor: pointer;
  border: 1px solid #ccc;
}
</style>
