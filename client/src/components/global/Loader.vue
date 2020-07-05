<template>
  <div class="loader-container flex-center">
    <div class="loading loading-lg"></div>
  </div>
</template>
<script>
export default {
  name: 'Loader',
};
</script>
<style lang="scss" scoped>
.loader-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
}
</style>
