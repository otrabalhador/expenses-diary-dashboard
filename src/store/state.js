export default {
  isLoggedIn: localStorage.getItem('user') !== null,
  user: localStorage.getItem('user'),

  // expenses
  columns: [
    {
      label: 'Date',
      field: 'reference_date',
      type: 'date',
      filterable: true,
      inputFormat: 'YYYY-MM-DD',
      outputFormat: 'YYYY-MM-DD'
    },
    {
      label: 'Description',
      field: 'description',
      html: false,
      filterable: true
    },
    {
      label: 'Category',
      field: 'category_id'
    },
    {
      label: 'Regreted',
      field: 'regreted'
    },
    {
      label: 'Amount',
      field: 'amount',
      type: 'number',
      html: true
    }
  ],

  expenses: [{}]
}
