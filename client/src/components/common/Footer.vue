<template>
  <footer class="footer bg-gray flex-center p-absolute">
    <div class="text-center">
      <p>
        &copy; 2020 Stock Trading App
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>
<style lang="scss" scoped>
.footer {
  font-family: 'SourceSansProBlackItalic';
  font-size: 1rem;
  font-weight: bold;
  bottom: 0;
  border-top: 1px solid #ddd;
  width: 100vw;
  padding: 1rem;
}

.footer p {
  margin: 0;
}
</style>
