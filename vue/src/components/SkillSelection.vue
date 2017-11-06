<template>
  <div class="skill-selection">
    <SkillButton :onClick="chooseSkill.bind(null, 6)">
      Osaan Reactia ja Vue.js:ää
    </SkillButton>
    <SkillButton :onClick="chooseSkill.bind(null, 5)">
      Osaan Reactia mutta en osaa Vue.js:ää
    </SkillButton>
    <SkillButton :onClick="chooseSkill.bind(null, 4)">
      En osaa Reactia mutta osaan Vue.js:ää
    </SkillButton>
    <SkillButton :onClick="chooseSkill.bind(null, 3)">
      En osaa kumpaakaan, mutta olen kuullut molemmista
    </SkillButton>
    <SkillButton :onClick="chooseSkill.bind(null, 2)">
      En osaa kumpaakaan, mutta olen kuullut Reactista
    </SkillButton>
    <SkillButton :onClick="chooseSkill.bind(null, 1)">
      En osaa kumpaakaan, mutta olen kuullut Vue.js:stä
    </SkillButton>
    <SkillButton :onClick="chooseSkill.bind(null, 0)">
      En ole kuullut kummastakaan, onko React jotain syötävää?
    </SkillButton>
  </div>
</template>

<script>
import SkillButton from './SkillButton';

export default {
  name: 'SkillSelection',
  components: {
    SkillButton,
  },
  methods: {
    chooseSkill(skill) {
      this.$emit('incrementPhase');
      fetch(`http://localhost:3000/skill?skill=${skill}`);
    },
  },
};
</script>

<style type="sass" scoped>
.skill-selection {
  display: flex;
  flex-direction: row;
}
</style>
