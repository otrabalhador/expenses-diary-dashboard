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

      <button type='submit' class='-btn' value='Logar' :disabled="loading" @click="handleLogin()">
        
        <div class="-btn-group">
          <span v-if="loading">
              <icon name="spinner" pulse></icon>
              <span class="btn-message">Logging in</span>
          </span>

          <span v-else>
            <span class="-btn-message">Logar</span>
          </span>
        </div>

      </button>
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
      },
      loading: false
    }
  },
  methods: {
    handleLogin () {
      this.loading = true
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
          this.loading = false
        })
    }
  }
}
</script>


<style scoped lang='scss'>


</style>