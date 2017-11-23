<template>
  <div id="payment-origin">

    <div class="-wrapper">
      <h1>Payment Origin</h1>
      <button class='-btn -btn-icon' @click="openModal">
        <icon name="plus" scale="2"></icon>
      </button>
    </div>

    <loading v-show="loading" :msg="loading.msg"></loading>

    <table-modal-component
      :data="paymentOrigins"
      :columns="paymentOriginColumns"
      :modal="paymentOriginModalName"
      :onCreate="createPaymentOrigin"
      :onEdit="editPaymentOrigin"
      :onDelete="deletePaymentOrigin"
    >
    </table-modal-component>

  </div>
</template>

<script>
  import Loading from '@/components/loading/Loading'
  import TableModalComponent from '@/components/table/TableModalComponent'
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
      openModal () {
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
      createPaymentOrigin (paymentOrigin) {
        this.loading = { msg: 'Creating new payment origin' }
        this.$store.dispatch('newPaymentOrigin', paymentOrigin)
          .then((message) => {
            this.loading = false
            this.$notify({
              type: 'info',
              group: 'info',
              title: 'Payment Origin',
              text: message
            })
            this.$modal.hide('payment-origin-form')
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
      },
      editPaymentOrigin (paymentOrigin) {
        this.loading = { msg: 'Editing payment origin' }
        this.$store.dispatch('editPaymentOrigin', paymentOrigin)
          .then((message) => {
            this.loading = false
            this.$notify({
              type: 'info',
              group: 'info',
              title: 'Payment Origin',
              text: message
            })
            this.$modal.hide('payment-origin-form')
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
    components: { TableModalComponent, Loading }
  }
</script>


<style scoped lang="scss">
  
</style>