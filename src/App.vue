<template>
  <div id="app" class="app">
  
  <v-dialog/>
  <notifications 
    group="error" 
    type="error"
    position="top left"
  />
  <notifications 
    group="info" 
    type="info"
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

  * {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;

  }

  .vue-notification {
    font-size: 14px;
  }

  .-wrapper {
    width: $size-width;
    left: $left-width;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

  }

  .-wrapper-vertical {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .-wrapper-modal {
    position: absolute;
    bottom: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;

    * {
      margin: 0;
      width: 100%;
    }
  }

  .-limit-size {
    width: $size-width;
    left: $left-width;
    position: relative;
  }

  .-fixed-right {
    position: fixed;
    top: 50%;
    right: 3vw;
  }


</style>
