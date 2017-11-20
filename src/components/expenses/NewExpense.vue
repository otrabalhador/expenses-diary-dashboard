<template>
  <div id="new-expense">
    <modal 
      name="expense-form"
      :width="400"
      :height="600"
      @before-open="beforeOpen"
      >

      <loading v-show="loading" :msg="loading.msg"></loading>

      <div class='-wrapper-vertical'>


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
          <label for="category" class="control-label">
            Category
          </label>
          <input
            id="category" 
            type="number"
            placeholder="category id" 
            class="form-input" 
            v-model="expense.categoryId">
        </div>

        <div class="form-group">
          <label for="paymentOriginId" class="control-label">
            Payment Origin
          </label>
          <input
            id="paymentOriginId" 
            type="number"
            placeholder="Payment Origin Id" 
            class="form-input" 
            v-model="expense.paymentOriginId">
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
export default {
  name: 'new-expense',
  data () {
    return {
      loading: false,
      expense: {},
      emptyExpense: {
        referenceDate: null,
        description: null,
        categoryId: 1,
        paymentOriginId: null,
        regreted: null,
        amount: null
      },
      newExpenseModal: true
    }
  },
  methods: {
    beforeOpen (event) {
      if (event.params) {
        this.newExpenseModal = false
        if (event.params.expense) {
          this.expense = event.params.expense
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
  components: { Loading }
}
</script>

<style scoped lang="scss">


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

</style>