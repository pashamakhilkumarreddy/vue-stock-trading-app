<template>
  <div id="app">
    <app-header />
      <router-view />
    <app-footer />
  </div>
</template>
<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Stock Trading App',
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>
<style lang="scss">
</style>
