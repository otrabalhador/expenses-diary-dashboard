<template>
  <div id="expenses">

    <expense-table
      :data="expenses"
      :columns="columns"
    >
    </expense-table>

  </div>
</template>

<script>
  import ExpenseTable from '@/components/expenses/ExpenseTable'
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
    computed: mapGetters([
      'columns',
      'expenses',
      'totalExpenses',
      'totalExpensesAmount'
    ]),
    components: { ExpenseTable }
  }
</script>


<style slot-scoped lang='scss'>

</style>