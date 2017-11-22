<template>
  <div id="expense-modal">
    <modal 
      name="expense-form"
      :width="modalWidth"
      :height="modalHeight"
      @before-open="beforeOpen"
      >

      <loading v-show="loading" :msg="loading.msg"></loading>

      <div class='-wrapper-vertical -limit-size' :style="{ 'max-width': modalWidth + 'px' }">

      <form>

        <!-- Reference Date -->
        <div class="form-group">
          <label for="referenceDate" class="control-label">
            Date
          </label>
          <input 
            id="referenceDate" 
            type="date" 
            placeholder="Date" 
            class="form-input"
            v-model="expense.referenceDate">
        </div>


        <div class="form-group">
          <label for="description" class="control-label">
            Description
          </label>
          <input 
            id="description" 
            placeholder="Description" 
            class="form-input" 
            v-model="expense.description">
        </div>


        <div class="form-group">
          <label for="category">Category</label>
          <select 
            class="form-select" 
            id="category"
            v-model="expense.categoryId">
            <option
              v-for="category in categories" 
              :value="category.id">
              {{category.name}}
            </option>
          </select>
        </div>


        <div class="form-group">
          <label for="paymentOrigin">Payment Origin</label>
          <select 
            class="form-select" 
            id="paymentOrigin"
            v-model="expense.paymentOriginId">
            <option
              v-for="paymentOrigin in paymentOrigins" 
              :value="paymentOrigin.id">
              {{paymentOrigin.abbreviation}}
            </option>
          </select>
        </div>



        <div class="form-group">
          <label for="regreted" class="control-label">
            Regreted
          </label>
          <input
            id="regreted" 
            type="checkbox"
            placeholder="regreted id" 
            class="form-input" 
            v-model="expense.regreted">
        </div>

        <div class="form-group">
          <label for="amount" class="control-label">
            Amount
          </label>
          <input
            id="amount" 
            type="number"
            placeholder="Amount of expense" 
            class="form-input" 
            v-model="expense.amount">
        </div>

      </form>

      </div>
      <hr>

      <div class="-wrapper-modal">

        <button class='-btn -btn-red' @click="$modal.hide('expense-form');">
          Close
        </button>
        
        <button class='-btn' v-if="newExpenseModal" @click="newExpense()">
          Create
        </button>
        
        <button class='-btn' v-else @click="editExpense()">
          Edit
        </button>

      </div>

    </modal>
  </div>
</template>

<script>
  import Loading from '@/components/loading/Loading'
  import { mapGetters } from 'vuex'

  export default {
    name: 'expense-modal',
    data () {
      return {
        modalHeight: 600,
        modalWidth: 400,

        loading: false,

        emptyExpense: {
          referenceDate: null,
          description: null,
          categoryId: null,
          paymentOriginId: null,
          regreted: null,
          amount: null
        },
        expense: {},
        newExpenseModal: true
      }
    },
    watch: {

      // To keep reactivity when user changes category
      'expense.categoryId': function (categoryId, oldCategoryId) {
        if (oldCategoryId) {
          // Find the index of selected categoryId
          let index = this.categories.map((el) => el.id).indexOf(categoryId)

          // Set expense object to contain the select category object
          this.$set(this.expense, 'category', this.categories[index])
        }
      },

      // To keep reactivity when user changes paymentOrigin
      'expense.paymentOriginId': function (paymentOriginId, oldPaymentOriginId) {
        if (oldPaymentOriginId) {
          // Find the index of selected paymentOriginId
          let index = this.paymentOrigins.map((el) => el.id).indexOf(paymentOriginId)

          // Set expense object to contain the select paymentOrigin object
          this.$set(this.expense, 'paymentOrigin', this.paymentOrigins[index])
        }
      }

    },
    mounted () {
      this.expense = this.emptyExpense
    },
    methods: {
      beforeOpen (event) {
        if (event.params) {
          this.newExpenseModal = false
          if (event.params.data) {
            this.expense = event.params.data
          } else {
            this.expense = this.emptyExpense
            this.newExpenseModal = true
          }
        } else {
          if (!this.newExpenseModal) {
            this.newExpenseModal = true
            this.expense = this.emptyExpense
          }
        }
      },
      newExpense () {
        this.loading = { msg: 'Creating new expense' }
        this.$store.dispatch('newExpense', this.expense)
          .then((message) => {
            this.loading = false
            this.$notify({
              type: 'info',
              group: 'info',
              title: 'Expense',
              text: message
            })
            this.$modal.hide('expense-form')
          })
          .catch((err) => {
            this.loading = false
            this.$notify({
              type: 'error',
              group: 'error',
              title: 'Expense',
              text: err
            })
          })
      },
      editExpense (expense) {
        this.loading = { msg: 'Editing expense' }
        this.$store.dispatch('editExpense', this.expense)
          .then((message) => {
            this.loading = false
            this.$notify({
              type: 'info',
              group: 'info',
              title: 'Expense',
              text: message
            })
            this.$modal.hide('expense-form')
          })
          .catch((err) => {
            this.loading = false
            this.$notify({
              type: 'error',
              group: 'error',
              title: 'Expense',
              text: err
            })
          })
      }
    },
    computed: mapGetters(['categories', 'paymentOrigins']),
    components: { Loading }
  }
</script>

<style scoped lang="scss">
  @import '../../sass/_variables';

  .-wrapper-modal {
    position: absolute;
    bottom: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;

    * {
      margin: 0;
      width: 100%;
    }
  }

  .-btn {
    border-radius: 0;
  }

  .-limit-size {
    width: $size-width;
    left: $left-width;
    position: relative;
  }


</style>