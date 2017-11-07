<template>
  <div id="app" class="app">
    <main>
      <nav-bar></nav-bar>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'app',
  components: { NavBar }
}
</script>

<style lang='scss'>
  @import './sass/main';
  @import './sass/_variables.scss';

  /*Prevents unexpected scroll on x axis*/
  div.app {
    overflow: auto;
  }

  body {
    background-color: $primary-color-light;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;

  }
</style>
