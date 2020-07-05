<template>
  <header class="header navbar">
    <section class="navbar-section">
      <router-link to="/home" class="btn btn-link">
        Home
      </router-link>
    </section>
    <section class="navbar-center">
      <router-link to="/" class="btn btn-link logo">
        <img src="../../assets/images/icons/logo.png" alt="Main Logo"
        decoding="async" loading="lazy" importance="high" />
      </router-link>
    </section>
    <section class="navbar-section">
      <router-link to="profile" class="btn btn-link" v-if="isUserLoggedIn">
        Profile
      </router-link>
      <router-link to="/login" class="btn btn-link bg-primary text-light"
       v-if="!isUserLoggedIn">
        Log In
      </router-link>
      <span class="btn bg-error text-light" v-if="isUserLoggedIn">
        Log Out
      </span>
    </section>
  </header>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'isUserLoggedIn',
    ]),
  },
};
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
}
.logo {
  width: 4rem;
  height: 3rem;
}

.btn {
  margin: 0 0.3rem;
}
</style>
