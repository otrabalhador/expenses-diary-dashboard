<template>
  <div id="register">

    <alert :msg="err" v-show="err"></alert>

    <form>
      <div class='form-group'>
        <label for='firstName' class='form-label'>First Name</label>
        <input id='firstName' class='form-input' type='text' v-model="credentials.firstName"/>
      </div>

      <div class='form-group'>
        <label for='lastName' class='form-label'>Last Name</label>
        <input id='lastName' class='form-input' type='text' v-model="credentials.lastName"/>
      </div>

      <div class='form-group'>
        <label for='email' class='form-label'>Email</label>
        <input id='email' class='form-input' type='email' v-model="credentials.email"/>
      </div>

      <div class='form-group'>
        <label for='password' class='form-label'>Password</label>
        <input id='password' class='form-input' type='password' v-model="credentials.password"/>
      </div>

      <button type='submit' class='-btn' value='Logar' :disabled="loading" @click="register()">
        
        <div class="-btn-group">
          <span v-if="loading">
              <icon name="spinner" pulse></icon>
              <span class="btn-message">Registering</span>
          </span>

          <span v-else>
            <span class="-btn-message">Register</span>
          </span>
        </div>

      </button>
    </form>

  </div>
</template>

<script>
  import Alert from '../Alert'
  import routeDetails from '../../router/route_details.js'
  export default {
    name: 'register',
    data () {
      return {
        credentials: {
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        },
        loading: false,
        err: null
      }
    },
    methods: {
      register () {
        this.loading = true
        this.$store.dispatch('register', this.credentials)
          .then(() => {
            this.loading = false
            this.$router.push(routeDetails.expenses.path)
          })
          .catch((err) => {
            this.loading = false
            this.err = err
          })
      }
    },
    components: { Alert }
  }
</script>

<style scoped lang="scss">
  

</style>