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

  body {
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

  .-wrapper {
    width: $size-width;
    left: $left-width;
    position: relative;

    display: flex;
    justify-content: center;

  }

  .-fixed-right {
    position: fixed;
    top: 50%;
    right: 3vw;
  }

  .btn {
    min-width: 100px;
    padding: 10px;
    border-radius: 5px;
    margin-left: 5px;
  }

  * {
    outline: none;
  }

  .btn-big {
    min-width: 15vw;
    padding: 10px;
  }


  .btn-icon-sm {
    width: 25px;
    height: 25px;
    border-radius: 25px;
    padding: 5px 2px 2px 2px;
    margin: 0 2px;
    @include shadow;
  }  

  .btn-icon {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    padding: 8px 2px 2px 2px;
    @include shadow;
  }  


  .btn-icon { @include primary-color-dark; }
  .btn-icon:active { @include primary-color-dark-outline; }
  // .btn-icon-sm { @include secondary-color-dark; }
  // .btn-icon-sm:active { @include secondary-color-dark-outline; }

  .btn.active { @include primary-color-dark; }
  .btn-inverse.active { @include primary-color-dark; }

  .btn { @include primary-color-dark; }
  .btn:active { @include primary-color-dark-outline; }

  .btn-red { @include red; }
  
  .btn-red:active { @include red-outline; }

  .btn-blue { @include blue; }
  .btn-blue:active { @include blue-outline; }




  form {
    display: grid;
    justify-content: center;

    * {
      margin-top: 20px;
    }
  }

  .form-group {

    display: grid;
    grid-template-areas: 'label . input';
    grid-template-columns: 1fr 20px 3fr;
    align-items: center;


    .form-label {
      grid-area: label;
      justify-self: right;
      font-weight: bold;
    }

    .form-input {
      grid-area: input;
      background-color: transparent;
      border-bottom: 2px solid black;
      padding-left: 10px; 
      height: 2em;
    }
  }


</style>
