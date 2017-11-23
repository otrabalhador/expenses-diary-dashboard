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
    justify-items: center;
    align-items: start;

    .payment-origin {
      grid-area: payment;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .category {
      grid-area: category;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .sep {
      grid-area: sep;
      align-self: stretch;

      height: auto;
      width: 100%;
      display: flex;
      justify-content: flex-start;

      .border {
        height: 100%;
        width: 50%;
        border-right: 1px solid $shallow-gray;
      }
      
    }
  }

  @media screen and (min-width: 850px){
    .-settings {
      grid-template-areas: 'payment sep category';
      grid-template-columns: 1fr 2vw 1fr;
    }
  }

  @media screen and (max-width: 850px){
    .-settings {
      grid-template-areas: 
        'payment'
        'category';
      }
  }

</style>