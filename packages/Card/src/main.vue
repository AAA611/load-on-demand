<template>
  <div class="q-card">
    <div class="q-card__header">Card Title!</div>
    <slot />
  </div>
</template>
<script>
export default {
  name: "q-card",
};
</script>
<style lang="css" scoped>
.q-card {
  width: 300px;
  height: 360px;
  border: 1px solid rgb(79, 244, 167);
  overflow: hidden;
  box-sizing: border-box;
}
.q-card__header {
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #fff;
  height: 60px;
  background-color: rgb(79, 244, 167);
}
</style>
