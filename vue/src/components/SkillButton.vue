<template>
  <div class="skill-button" @click="onClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SkillSelection',
  props: ['onClick'],
};
</script>

<style type="sass" scoped>
.skill-button {
  margin: 10px;
  cursor: pointer;
  display: flex;
  border: 1px solid #ccc;
  flex: 1;
  min-height: 200px;
  justify-content: center;
  align-items: center;
}
</style>
