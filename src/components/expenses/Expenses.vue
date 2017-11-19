<template>
  <div id="expenses">
    <loading v-show="loading" :msg="loading.msg"></loading>
    <new-expense></new-expense>

    <div class="-fixed-right">
    <button class='-btn -btn-icon' @click="newExpense">
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
  import Loading from '@/components/loading/Loading'
  import { mapGetters } from 'vuex'

  export default {
    name: 'expenses',
    data () {
      return {
        loading: {
          msg: 'Fetching expenses'
        }
      }
    },
    created () {
      this.$store.dispatch('fetchExpenses')
        .then(() => {
          this.loading = false
        })
        .catch((err) => {
          this.loading = false

          this.$notify({
            type: 'error',
            group: 'error',
            text: err
          })
        })
    },
    methods: {
      newExpense () {
        this.$modal.show('expense-form')
      }
    },
    computed: mapGetters([
      'columns',
      'expenses',
      'totalExpenses',
      'totalExpensesAmount'
    ]),
    components: { ExpenseTable, NewExpense, Loading }
  }
</script>


<style slot-scoped lang='scss'>


</style>