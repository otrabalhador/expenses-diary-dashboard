<template>
  <div id="alert">
    <div class="-wrapper">
      <div class="alert" :class="type">
        <p>{{msg}}</p>
      </div>
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'alert',
    props: {
      msg: {
        type: String
      },
      type: {
        type: String,
        default: 'error'
      }
    }
  }
</script>

<style scoped lang="scss">
  
  @import '../sass/_variables';

  .alert {
    min-width: 40vw;

    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-content: center;


    p {
      padding: 20px;
    }

    &.error {
      background-color: $soft-red;
      border: 1px solid $red;
    }

    &.primary {
      background-color: $soft-green;
      border: 1px solid $green;
    }

    &.secondary {
      background-color: $soft-blue;
      border: 1px solid $blue;
    }
  }

</style>