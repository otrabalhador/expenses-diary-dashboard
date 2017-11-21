export default {
  isLoggedIn: localStorage.getItem('user') !== null,
  user: localStorage.getItem('user'),

  // expenses
  columns: [
    {
      label: 'Date',
      field: 'referenceDate',
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
      field: 'categoryId'
    },
    {
      label: 'Payment Origin',
      field: 'paymentOrigin.abbreviation'
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

  totalExpenses: 0,
  expenses: [{}],

  totalPaymentOrigins: 0,
  paymentOrigins: [{}]
}
