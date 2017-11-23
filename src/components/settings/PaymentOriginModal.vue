<template>
  <div id="payment-origin-modal">
    <modal 
      name="payment-origin-form"
      :width="modalWidth"
      :height="modalHeight"
      @before-open="beforeOpen"
      >

      <loading v-show="loading" :msg="loading.msg"></loading>

      <div class='-wrapper-vertical -limit-size' :style="{ 'max-width': modalWidth + 'px' }">

      <form>

        <div class="form-group">
          <label for="name" class="control-label">
            Name
          </label>
          <input 
            id="name" 
            placeholder="Name" 
            class="form-input" 
            v-model="paymentOrigin.name">
        </div>

        <div class="form-group">
          <label for="description" class="control-label">
            Description
          </label>
          <input 
            id="description" 
            placeholder="Description" 
            class="form-input" 
            v-model="paymentOrigin.description">
        </div>

        <div class="form-group">
          <label for="abbreviation" class="control-label">
            Abbreviation
          </label>
          <input 
            id="abbreviation" 
            placeholder="Abbreviation" 
            class="form-input" 
            v-model="paymentOrigin.abbreviation">
        </div>

      </form>

      </div>
      <hr>

      <div class="-wrapper-modal">

        <button class='-btn -btn-red -btn-no-radius' @click="$modal.hide('payment-origin-form');">
          Close
        </button>
        
        <button class='-btn -btn-no-radius' v-if="newPaymentOriginModal" @click="newPaymentOrigin()">
          Create
        </button>
        
        <button class='-btn -btn-no-radius' v-else @click="editPaymentOrigin()">
          Edit
        </button>

      </div>
    </modal>
  </div>
</template>

<script>
  import Loading from '@/components/loading/Loading'

  export default {
    name: 'payment-origin-modal',
    data () {
      return {
        modalHeight: 600,
        modalWidth: 400,

        loading: false,

        emptyPaymentOrigin: {
          description: null,
          name: null,
          abbreviation: null
        },
        paymentOrigin: {},
        newPaymentOriginModal: true
      }
    },
    mounted () {
      this.paymentOrigin = this.emptyPaymentOrigin
    },
    methods: {
      beforeOpen (event) {
        if (event.params) {
          this.newPaymentOriginModal = false
          if (event.params.data) {
            this.paymentOrigin = event.params.data
          } else {
            this.paymentOrigin = this.emptyPaymentOrigin
            this.newPaymentOriginModal = true
          }
        } else {
          if (!this.newPaymentOriginModal) {
            this.newPaymentOriginModal = true
            this.paymentOrigin = this.emptyPaymentOrigin
          }
        }
      },
      newPaymentOrigin () {
        this.loading = { msg: 'Creating new payment origin' }
        this.$store.dispatch('newPaymentOrigin', this.paymentOrigin)
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
      }
    },
    components: { Loading }
  }
</script>

<style scoped lang="scss">
</style>