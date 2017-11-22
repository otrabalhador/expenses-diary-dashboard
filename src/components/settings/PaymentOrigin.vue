<template>
  <div id="payment-origin">
    <div class="-wrapper">
      <h1>Payment Origin</h1>
      <button class='-btn -btn-icon' @click="newPaymentOrigin">
        <icon name="plus" scale="2"></icon>
      </button>
    </div>

    
    <loading v-show="loading" :msg="loading.msg"></loading>

    <payment-origin-modal></payment-origin-modal>
    <table-component
      :data="paymentOrigins"
      :columns="paymentOriginColumns"
      :modal="paymentOriginModalName"
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
        loading: false,
        paymentOriginModalName: 'payment-origin-form'
      }
    },
    created () {
      if (!this.paymentOrigins) {
        this.fetchPaymentOrigins()
      }
    },
    methods: {
      newPaymentOrigin () {
        this.$modal.show(this.paymentOriginModalName)
      },
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
      deletePaymentOrigin (expense) {
        this.loading = { msg: 'Removing payment origin' }
        this.$store.dispatch('deletePaymentOrigin', expense.id)
          .then((message) => {
            this.loading = false
            this.$notify({
              type: 'info',
              group: 'info',
              title: 'Payment Origin',
              text: message
            })
          })
          .catch((err) => {
            this.loading = false
            this.$notify({
              type: 'error',
              group: 'error',
              title: 'Payment Origin',
              text: err
            })
          })
      }
    },
    computed: mapGetters(['paymentOrigins', 'paymentOriginColumns']),
    components: { TableComponent, PaymentOriginModal, Loading }
  }
</script>


<style scoped lang="scss">
  
</style>