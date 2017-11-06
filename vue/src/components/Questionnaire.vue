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
export default {
  name: 'Questionnaire',
  props: ['phase', 'questions'],
  methods: {
    selectChoice(choice) {
      const base = 'http://localhost:3000';
      fetch(`${base}/answer?question=${this.question.id}&choice=${choice}`);
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

<style type="sass" scoped>
.choice-button {
  margin: 10px;
  padding: 10px;
  font-size: 1.5em;
  cursor: pointer;
  border: 1px solid #ccc;
}
</style>
