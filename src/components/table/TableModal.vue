<template>
  <div id="table-modal">
    <modal 
      :name="modal"
      :width="width"
      :height="height"
      @before-open="beforeOpen"
      >

      <loading v-show="loading" :msg="loading.msg"></loading>

      <div class='-wrapper-vertical -limit-size' :style="{ 'max-width': width }">

      <form>

        <template v-for="column in columns">

          <div class="form-group">

            <label :for="column['label']" class="control-label">
              {{column["label"]}}
            </label>

            <input 
              :id="column['label']"
              class="form-input"
              v-model="modalData[column.field]"
            >

          </div>

        </template>

      </form>

      </div>
      <hr>

      <div class="-wrapper-modal">

        <button class='-btn -btn-red -btn-no-radius' @click="$modal.hide(modal);">
          Close
        </button>
        
        <button class='-btn -btn-no-radius' v-if="modalType === createType" @click="onCreate(modalData)">
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
      height: {
        type: Number,
        default: 600
      },
      width: {
        type: Number,
        default: 400
      },
      modal: {
        type: String
      },
      onCreate: {
        type: Function
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
        loading: false,

        emptyModalData: {},
        modalData: {},

        createType: 'CREATE',
        editType: 'EDIT',
        modalType: this.createType
      }
    },
    mounted () {
      this.modalData = this.emptyModalData
    },
    methods: {
      beforeOpen (event) {
        if (event.params) {
          this.modalType = this.editType
          if (event.params.data) {
            this.modalData = event.params.data
          } else {
            this.modalData = this.emptyModalData
            this.modalType = this.createType
          }
        } else {
          if (!this.modalType) {
            this.modalType = this.createType
            this.modalData = this.emptyModalData
          }
        }
      }
    },
    components: { Loading }
  }
</script>
