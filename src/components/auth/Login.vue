<template>
  <div id='login'>

    <form>
      <div class='form-group'>
        <label for='email' class='form-label'>Email</label>
        <input id='email' class='form-input' type='text' v-model="credentials.email"/>
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
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
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
            text: err
          })
          this.err = err
        })
    }
  }
}
</script>


<style scoped lang='scss'>

  // Forms

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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