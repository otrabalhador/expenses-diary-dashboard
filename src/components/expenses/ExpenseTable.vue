<template>
  <div id="table" class="-wrap-table">

    <div class="-table" :class="columnClass">

        <!-- Headers -->
      <template v-for="column in computedColumns">
        <div class='-table-cell -table-cell-header'>{{column['label']}}</div>
      </template>

      <div class='-table-cell -table-rbar-header'></div>

      <!-- Content -->
      <template v-for="(row, rowNumber) in data">
        <div class='-table-cell' :class="{'-table-cell-even': isEven(rowNumber)}" v-for="column in computedColumns">
          {{row[column['field']]}}
        </div>

      <div class='-table-cell -table-rbar-cell' :class="{'-table-cell-even': isEven(rowNumber)}">
        
        <button class='btn-icon-sm btn-blue' @click="editExpense(row)">
          <icon name="edit" scale="1"></icon>
        </button>      

        <button class='btn-icon-sm btn-red' @click="deleteExpense(row)">
          <icon name="trash" scale="1"></icon>
        </button>      
      </div>        

      </template>

    </div>

  </div>
</template>

<script>
export default {
  name: 'table',
  props: {
    data: {
      type: Array,
      default () {
        return [
          {'Column A': '1', 'Column B': '2'},
          {'Column A': '3', 'Column B': '4'},
          {'Column A': '5', 'Column B': '6'},
          {'Column A': '0', 'Column B': '00'}
        ]
      }
    },
    columns: {
      type: Array,
      default () {
        return null
      }
    }
  },
  methods: {
    isEven (value) {
      return value % 2 !== 0
    },
    editExpense (expense) {
      this.$modal.show('expense-form', { expense: expense })
    },
    deleteExpense (expense) {
      this.$store.dispatch('deleteExpense', expense.id)
        .then((message) => {
          this.$notify({
            type: 'info',
            group: 'info',
            title: 'Expense',
            text: message
          })
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
  },
  computed: {
    computedColumns () {
      let columns = this.columns
      if (!columns) {
        columns = Object.keys(this.data[0]).map(el => {
          return {
            'label': el,
            'field': el
          }
        })
      }
      return columns
    },
    columnClass () {
      let colN = this.computedColumns.length
      let className = '-table--%colN%cols'
      return className.replace(/%colN%/g, colN)
    }
  }
}
</script>

<style scoped lang="scss">
  
  @import '../../sass/_variables.scss';

  $bw: 3px;  // border width
  $rbar-width: 7%;

  .-wrap-table {
    display: flex;
    justify-content: center;
  }

  .-table {
    width: $size-width;

    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    .-table-cell {
      display: flex;
      justify-content: center;
      align-content: center;


      box-sizing: border-box;
      flex-grow: 1;
      flex-shrink: 1;
      width: 100%;  // Default to full width
      
      box-sizing: border-box;
      padding: 0.5em 0.4em;
      margin: 0;

      overflow: hidden;
      list-style: none;
      border-top: 1px solid black;
      background-color: fade(slategrey,20%);
      > h1, > h2, > h3, > h4, > h5, > h6 { margin: 0; }


      &.-table-rbar-header {
        width: $rbar-width;
      }

      &.-table-rbar-cell {
        width: $rbar-width;
      }

      &.-table-cell-even {
        background-color: $primary-color-light;
      }

      &.-table-cell-header,
      &.-table-rbar-header {
        background-color: $primary-color;
        font-weight: bold;
        font-size: 1.2em;
      }
    }


  }


  .-table--2cols > .-table-cell  { width: (100% - $rbar-width)/2 }
  .-table--3cols > .-table-cell  { width: (100% - $rbar-width)/3 }
  .-table--4cols > .-table-cell  { width: (100% - $rbar-width)/4 }
  .-table--5cols > .-table-cell  { width: (100% - $rbar-width)/5 }
  .-table--6cols > .-table-cell  { width: (100% - $rbar-width)/6 }
  // .-table--6cols > .-table-cell  { width: 14%; }
  .-table--7cols > .-table-cell  { width: (100% - $rbar-width)/7 }
  .-table--8cols > .-table-cell  { width: (100% - $rbar-width)/8 }
  .-table--9cols > .-table-cell  { width: (100% - $rbar-width)/9 }
  .-table--10cols > .-table-cell  { width: (100% - $rbar-width)/10 }
  .-table--11cols > .-table-cell  { width: (100% - $rbar-width)/11 }
  .-table--12cols > .-table-cell  { width: (100% - $rbar-width)/12 }
  .-table--13cols > .-table-cell  { width: (100% - $rbar-width)/13 }


</style>

