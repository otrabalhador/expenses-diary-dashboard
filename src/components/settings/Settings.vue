<template>
  <div id="settings">
    <div class="-settings">
      <payment-origin class="payment-origin"></payment-origin>
      <category class="category"></category>

      <div class="sep">
        <div class="border"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import PaymentOrigin from './PaymentOrigin'
  import Category from './Category'
  export default {
    name: 'settings',
    components: { PaymentOrigin, Category }
  }
</script>


<style scoped lang="scss">
  @import '../../sass/_variables';

  .-settings {
    display: grid;
    grid-template-areas: 'payment-origin sep category';
    grid-template-columns: '1fr 2vw 1fr';
    justify-items: center;

    .payment-origin {
      grid-area: payment-origin;
    }

    .category {
      grid-area: category;
    }

    .sep {
      width: 100%;
      display: flex;
      justify-content: flex-start;

      grid-area: sep;
      height: auto;

      .border {
        height: 100%;
        width: 50%;
        border-right: 1px solid $shallow-gray;
      }
      
    }


  }


</style>