<template>
  <div id="new-expense">
    <modal 
      name="expense-form"
      :width="400"
      :height="500">

      <div class='-wrapper'>

      <form>

        <!-- Reference Date -->
        <div class="form-group">
          <label for="reference_date" class="control-label">
            Date
          </label>
          <input 
            id="reference_date" 
            type="date" 
            placeholder="Date" 
            class="form-input" 
            v-model="expense.reference_date">
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
            v-model="expense.category_id">
        </div>

        <div class="form-group">
          <label for="payment_origin_id" class="control-label">
            Payment Origin
          </label>
          <input
            id="payment_origin_id" 
            type="number"
            placeholder="Payment Origin Id" 
            class="form-input" 
            v-model="expense.payment_origin_id">
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

        <button class='btn btn-red' @click="$modal.hide('expense-form');">
          Close
        </button>
        
        <button class='btn' @click="newExpense()">
          Create
        </button>

      </div>

    </modal>
  </div>
</template>

<script>
export default {
  name: 'new-expense',
  props: {
    expense: {
      type: Object,
      default () {
        return {
          reference_date: null,
          description: null,
          category_id: null,
          payment_origin_id: null,
          regreted: null,
          amount: null
        }
      }
    }
  },
  data () {
    return {
      emptyExpense: {
        reference_date: null,
        description: null,
        category_id: 1,
        payment_origin_id: null,
        regreted: null,
        amount: null
      }
    }
  },
  methods: {
    newExpense () {
      this.$store.dispatch('newExpense', this.expense)
        .then((message) => {
          this.$notify({
            type: 'info',
            group: 'info',
            title: 'Expense',
            text: message
          })
          this.$modal.close('expense-form')
        })
        .catch((err) => {
          this.$notify({
            type: 'error',
            group: 'error',
            title: 'Expense',
            text: err
          })
        })
    }
  }
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


</style>