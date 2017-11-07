<template>
  <div class="skill-selection">
    <SkillButton
      :key="index"
      v-for="(skill, index) in skills"
      @click="chooseSkill(index)"
    >
      {{ skill }}
    </SkillButton>
  </div>
</template>

<script>
import * as config from '../config';

import SkillButton from './SkillButton';

export default {
  name: 'SkillSelection',
  components: {
    SkillButton,
  },
  data() {
    return {
      skills: [
        'Osaan Reactia ja Vue.js:ää',
        'Osaan Reactia mutta en osaa Vue.js:ää',
        'En osaa Reactia mutta osaan Vue.js:ää',
        'En osaa kumpaakaan, mutta olen kuullut molemmista',
        'En osaa kumpaakaan, mutta olen kuullut Reactista',
        'En osaa kumpaakaan, mutta olen kuullut Vue.js:stä',
        'En ole kuullut kummastakaan, onko React jotain syötävää?',
      ],
    };
  },
  methods: {
    chooseSkill(skill) {
      this.$emit('incrementPhase');
      fetch(`${config.BASE_URL}/skill?skill=${skill}`);
    },
  },
};
</script>

<style scoped>
.skill-selection {
  display: flex;
  flex-direction: row;
}
</style>
