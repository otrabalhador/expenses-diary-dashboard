<template>
  <div id='login'>

    <form>
      <div class='form-group'>
        <label for='username' class='form-label'>Username</label>
        <input id='username' class='form-input' type='text' v-model="credentials.username"/>
      </div>

      <div class='form-group'>
        <label for='password' class='form-label'>Password</label>
        <input id='password' class='form-input' type='password' v-model="credentials.password"/>
      </div>


      <button type='submit' class='btn' value='Logar' @click="handleLogin()">Logar</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      console.log(this.$store)
      this.$store.dispatch('login', this.credentials)
        .then(() => {
          let route = '/'
          this.$router.push(route)
        })
        .catch((err) => {
          this.$notify({
            type: 'error',
            group: 'error',
            title: 'Authentication error',
            text: err.message
          })
          this.err = err
        })
    }
  }
}
</script>


<style scoped lang='scss'>
  @import '../../sass/_variables.scss';

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


  button.btn.active,
  button.btn-inverse.active {
    @include primary-color-dark;
  }

  button.btn { @include primary-color-dark-outline; }
  button.btn:active { @include primary-color-dark; }


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
      background-color: transparent;
      border-bottom: 2px solid black;
      padding-left: 10px; 
      height: 2em;
    }
  }


</style>