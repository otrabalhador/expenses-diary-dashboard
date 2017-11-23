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
      field: 'category.name'
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

  // payment origin
  paymentOriginColumns: [
    {
      label: 'Name',
      field: 'name'
    },
    {
      label: 'Description',
      field: 'description'
    },
    {
      label: 'Abbreviation',
      field: 'abbreviation'
    }
  ],

  totalExpenses: 0,
  expenses: null,

  totalPaymentOrigins: 0,
  paymentOrigins: null,

  // category
  categoryColumns: [
    {
      label: 'Name',
      field: 'name'
    },
    {
      label: 'Description',
      field: 'description'
    }
  ],

  totalCategories: 0,
  categories: null
}
