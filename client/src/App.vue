<template>
  <fragment>
    <app-header />
      <main class="container">
        <router-view />
      </main>
    <app-footer />
  </fragment>
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
