<template>
  <div id="table" class="-wrap-table">

    <div class="-table" :class="columnClass">

        <!-- Headers -->
      <template v-for="column in computedColumns">
        <div class='-table-cell -table-cell-header'>{{column['label']}}</div>
      </template>
        
      <!-- Content -->
      <template v-for="(row, rowNumber) in data">
        <div class='-table-cell' :class="{'-table-cell-even': isEven(rowNumber)}" v-for="column in computedColumns">
          {{row[column['field']]}}
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

  .-wrap-table {
    display: flex;
    justify-content: center;
  }

  .-table {
    width: 80%;

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
      

      padding: 0.5em 0.4em;
      margin: 0;

      overflow: hidden;
      list-style: none;
      border-top: 1px solid black;
      background-color: fade(slategrey,20%);
      > h1, > h2, > h3, > h4, > h5, > h6 { margin: 0; }
    }

    .-table-cell-even {
      background-color: $primary-color-light;
    }

    .-table-cell-header {
      background-color: $primary-color;
      font-weight: bold;
      font-size: 1.2em;
    }
  }


  .-table--2cols > .-table-cell  { width: 50%; }
  .-table--3cols > .-table-cell  { width: 33.33%; }
  .-table--4cols > .-table-cell  { width: 25%; }
  .-table--5cols > .-table-cell  { width: 20%; }
  .-table--6cols > .-table-cell  { width: 16.6%; }
  .-table--7cols > .-table-cell  { width: 14.28%; }
  .-table--8cols > .-table-cell  { width: 12.25%; }
  .-table--9cols > .-table-cell  { width: 11.11%; }
  .-table--10cols > .-table-cell  { width: 10.00%; }
  .-table--11cols > .-table-cell  { width: 9.00%; }
  .-table--12cols > .-table-cell  { width: 8.33%; }
  .-table--13cols > .-table-cell  { width: 7.69%; }


</style>

