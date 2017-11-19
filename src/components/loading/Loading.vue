<template>
  <div id="loading">
    <div class='-wrapper-vertical'>
      <p class="loading">{{msg}}</p>
      <pulse-loader :size="size" :color="color"></pulse-loader>
    </div>
  </div>
</template>


<script>
  import PulseLoader from 'vue-spinner/src/PulseLoader'
  export default {
    props: ['msg'],
    data () {
      return {
        size: '20px',
        color: 'green'
      }
    },
    components: { PulseLoader }
  }
</script>

<style scoped lang="scss">
  [id="loading"] {
    margin-top: 20px;
  }

  .loading {
    color: #777777;
    font-weight: bold;
  }
</style>
