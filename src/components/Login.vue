<template>
  <div id='login'>
    <form>
      <div class='form-group'>
        <label for='user' class='form-label'>User</label>
        <input id='user' class='form-input' type='text'/>
      </div>

      <div class='form-group'>
        <label for='password' class='form-label'>Password</label>
        <input id='password' class='form-input' type='password'/>
      </div>


      <input type='submit' class='btn' value='Logar' @click="login()"/>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      console.log('loging in')
    }
  }
}
</script>


<style scoped lang='scss'>
  @import '../sass/_variables.scss';

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    * {
      margin-top: 20px;
    }
  }

  .btn {
      width: 100px;
      border: 1px solid;
      padding: 10px;
      border-radius: 5px;
      margin-left: 5px;
  }

  * {
    outline: none;
  }


  input.btn.active,
  input.btn-inverse.active {
    @include primary-color-dark;
  }

  input.btn { @include primary-color-dark-outline; }
  input.btn:active { @include primary-color-dark; }


  .btn-big {
    min-width: 15vw;
    padding: 10px;
  }

  div.single-aspect.active {
    @include secondary-color-dark;
  }



  .form-group {

    display: grid;
    grid-template-areas: 'label . input';
    grid-template-columns: 1fr 20px 2fr;
    align-items: center;


    .form-label {
      grid-area: label;
      justify-self: right;
      font-weight: bold;
    }

    .form-input {
      grid-area: input;

      padding-left: 10px;
      border-radius: 10px;
      height: 2em;
    }
  }


</style>