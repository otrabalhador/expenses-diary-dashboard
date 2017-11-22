<template>
  <div id="expenses">
    <loading v-show="loading" :msg="loading.msg"></loading>
    <expense-modal></expense-modal>

    <div class="-fixed-right">
      <button class='-btn -btn-icon' @click="newExpense">
        <icon name="plus" scale="2"></icon>
      </button>
    </div>
    
    <table-component
      :data="expenses"
      :columns="columns"
      modal="expense-form"
      :onDelete="deleteExpense"
    >
    </table-component>

  </div>
</template>

<script>
  import TableComponent from '@/components/table/TableComponent'
  import ExpenseModal from '@/components/expenses/ExpenseModal'
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
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.fetchExpenses()
        this.fetchPaymentOrigins()
        this.fetchCategories()
      },
      fetchExpenses () {
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
      fetchPaymentOrigins () {
        this.$store.dispatch('fetchPaymentOrigins')
          .catch((err) => {
            this.$notify({
              type: 'error',
              group: 'error',
              title: 'Error in fetch payment origins background process',
              text: err
            })
          })
      },
      fetchCategories () {
        this.$store.dispatch('fetchCategories')
          .catch((err) => {
            this.$notify({
              type: 'error',
              group: 'error',
              title: 'Error in fetch categories background process',
              text: err
            })
          })
      },
      newExpense () {
        this.$modal.show('expense-form')
      },
      deleteExpense (expense) {
        this.loading = { msg: 'Removing expense' }
        this.$store.dispatch('deleteExpense', expense.id)
          .then((message) => {
            this.loading = false
            this.$notify({
              type: 'info',
              group: 'info',
              title: 'Expense',
              text: message
            })
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
    computed: mapGetters([
      'columns',
      'expenses',
      'totalExpenses',
      'totalExpensesAmount'
    ]),
    components: { TableComponent, ExpenseModal, Loading }
  }
</script>


<style slot-scoped lang='scss'>


</style>