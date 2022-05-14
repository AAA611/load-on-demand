<template>
  <button class="q-button">
    <slot />
  </button>
</template>
<script>
export default {
  name: "q-button",
};
</script>
<style lang="css" scoped>
.q-button {
  width: 200px;
  height: 60px;
  border-radius: 8px;
  background-color: rgb(79, 244, 167);
  border: 1px solid rgb(79, 244, 167);
  color: #fff;
  font-size: 18px;
}
</style>
