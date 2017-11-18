<template>
  <div id="expenses">
<!-- 
    <modal name="hello-world">
      hello, world!
    </modal>
 -->
    <new-expense></new-expense>

    <div class="-fixed-right">
    <button class='btn-icon' @click="newExpense">
      <icon name="plus" scale="2"></icon>
    </button>
    </div>
    
    <expense-table
      :data="expenses"
      :columns="columns"
    >
    </expense-table>

  </div>
</template>

<script>
  import ExpenseTable from '@/components/expenses/ExpenseTable'
  import NewExpense from '@/components/expenses/NewExpense'
  import { mapGetters } from 'vuex'

  export default {
    name: 'expenses',
    created () {
      this.$store.dispatch('fetchExpenses')
        .catch((err) => {
          this.$notify({
            type: 'error',
            group: 'error',
            text: err
          })
        })
    },
    methods: {
      newExpense () {
        this.$modal.show('expense-form', {
          title: 'Alert!',
          text: 'You are too awesome',
          buttons: [
            {
              title: 'Deal with it',
              handler: () => { alert('Woot!') }
            },
            {
              title: 'Close'
            }]
        })
      }
    },
    computed: mapGetters([
      'columns',
      'expenses',
      'totalExpenses',
      'totalExpensesAmount'
    ]),
    components: { ExpenseTable, NewExpense }
  }
</script>


<style slot-scoped lang='scss'>


</style>