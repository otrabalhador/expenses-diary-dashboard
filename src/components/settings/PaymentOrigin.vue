<template>
  <div id="payment-origin">
    <loading v-show="loading" :msg="loading.msg"></loading>

    <payment-origin-modal></payment-origin-modal>
    <table-component
      :data="paymentOrigins"
      :columns="paymentOriginColumns"
      modal="payment-origin-form"
      :onDelete="deletePaymentOrigin"
    >
    </table-component>

  </div>
</template>

<script>
  import TableComponent from '@/components/table/TableComponent'
  import Loading from '@/components/loading/Loading'
  import PaymentOriginModal from './PaymentOriginModal'
  import { mapGetters } from 'vuex'

  export default {
    name: 'payment-origin',
    data () {
      return {
        loading: false
      }
    },
    created () {
      if (!this.paymentOrigins) {
        this.fetchPaymentOrigins()
      }
    },
    methods: {
      fetchPaymentOrigins () {
        this.loading = {
          msg: 'Fetching Payment Origins'
        }
        this.$store.dispatch('fetchPaymentOrigins')
          .then(() => { this.loading = false })
          .catch((err) => {
            this.loading = false
            this.$notify({
              type: 'error',
              group: 'error',
              text: err
            })
          })
      },
      deletePaymentOrigin () {
        console.log('deleting...')
      }
    },
    computed: mapGetters(['paymentOrigins', 'paymentOriginColumns']),
    components: { TableComponent, PaymentOriginModal, Loading }
  }
</script>


<style scoped lang="scss">
  
</style>