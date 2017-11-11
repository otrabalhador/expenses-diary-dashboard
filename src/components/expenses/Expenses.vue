<template>
  <div id="expenses">

    <div class='-wrapper'>
      <vue-good-table
          title="Demo Table"
          :columns="columns"
          :rows="expenses"/>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'expenses',
    data () {
      return {

        columns: [
          {
            label: 'reference_date',
            field: 'reference_date',
            type: 'date',
            filterable: true,
            inputFormat: 'YYYY-MM-DD',
            outputFormat: 'YYYY-MM-DD'
          },
          {
            label: 'description',
            field: 'description',
            html: false,
            filterable: true
          },
          {
            label: 'category_id',
            field: 'category_id'
          },
          {
            label: 'regreted',
            field: 'regreted'
          },
          {
            label: 'amount',
            field: 'amount',
            type: 'number',
            html: false
          }
        ]

        // info: null,
        // error: null,

        // loading: {
        //   value: true,
        //   message: 'Loading expenses...'
        // },

        // newExpense: {
        //   reference_date: null,
        //   description: null,
        //   category_id: null,
        //   amount: null,
        //   user_id: 1,
        //   payment_origin_id: 1
        // }
      }
    },
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
      'expenses',
      'totalExpenses',
      'totalExpensesAmount'
    ])
  }
</script>


<style slot-scoped lang='scss'>


  .-wrapper {
    display: flex;
    justify-content: center;
  }

  table.expenses {
    // display: flex;
    // align-content: center;
    // justify-content: right;
    // flex-direction: column;

    border-collapse: collapse;

    th,
    td {
      padding: 5px;
      margin: 0px;
      border: 1px solid black;
    }

    thead {
      font-size: 20px;
      background-color: gray;
    }

    tr {
      font-size: 16px;
      background-color: white;
    }

    tbody > tr:nth-child(even) {
      background-color: gray;
    }

//    tr:nth-child(odd) {
//      background-color: blue;
//    }

    tfoot {
      font-size: 20px;
      background-color: gray;
    }
  }

</style>