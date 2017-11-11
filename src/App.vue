<template>
  <div id="app" class="app">
  <notifications 
    group="error" 
    type="error"
    position="top left"
  />
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

  .vue-notification {
    font-size: 14px;
  }
</style>
