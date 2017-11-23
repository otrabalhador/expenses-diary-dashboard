<template>
  <div id="table-modal">
    <modal 
      :name="modal"
      :width="modalWidth"
      :height="modalHeight"
      @before-open="beforeOpen"
      >

      <loading v-show="loading" :msg="loading.msg"></loading>

      <div class='-wrapper-vertical -limit-size' :style="{ 'max-width': modalWidth + 'px' }">

      <form>

        <template v-for="column in columns">

          <div class="form-group">
            <label :for="column['label']" class="control-label">
              {{column["label"]}}
            </label>
            <input 
              :id="column['label']"
              class="form-input"
              v-model="modalData[column.field]">
          </div>

        </template>

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
        
        <button class='-btn -btn-no-radius' v-else @click="onEdit(modalData)">
          Edit
        </button>

      </div>
    </modal>
  </div>
</template>

<script>
  import Loading from '@/components/loading/Loading'

  export default {
    name: 'table-modal',
    props: {
      modal: {
        type: String
      },
      onEdit: {
        type: Function
      },
      columns: {
        type: Array
      }
    },
    data () {
      return {
        modalHeight: 600,
        modalWidth: 400,

        loading: false,

        emptyPaymentOrigin: {},
        modalData: {},
        newPaymentOriginModal: true
      }
    },
    mounted () {
      this.modalData = this.emptyModalData
    },
    methods: {
      beforeOpen (event) {
        if (event.params) {
          this.newPaymentOriginModal = false
          if (event.params.data) {
            this.modalData = event.params.data
          } else {
            this.modalData = this.emptyModalData
            this.newPaymentOriginModal = true
          }
        } else {
          if (!this.newPaymentOriginModal) {
            this.newPaymentOriginModal = true
            this.modalData = this.emptyModalData
          }
        }
      },
      newPaymentOrigin () {
        this.loading = { msg: 'Creating new payment origin' }
        this.$store.dispatch('newPaymentOrigin', this.modalData)
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