<template>
  <div id="category">

    <div class="-wrapper">
      <h1>Category</h1>
      <button class='-btn -btn-icon' @click="openModal">
        <icon name="plus" scale="2"></icon>
      </button>
    </div>

    <loading v-show="loading" :msg="loading.msg"></loading>

    <table-modal-component
      :data="categories"
      :columns="categoryColumns"
      :modal="categoryModalName"
      :onCreate="createCategory"
      :onEdit="editCategory"
      :onDelete="deleteCategory"
    >
    </table-modal-component>

  </div>
</template>

<script>
  import Loading from '@/components/loading/Loading'
  import TableModalComponent from '@/components/table/TableModalComponent'
  import { mapGetters } from 'vuex'

  export default {
    name: 'category',
    data () {
      return {
        loading: false,
        categoryModalName: 'category-form'
      }
    },
    created () {
      if (!this.categories) {
        this.fetchCategories()
      }
    },
    methods: {
      openModal () {
        this.$modal.show(this.categoryModalName)
      },
      fetchCategories () {
        this.loading = {
          msg: 'Fetching Categories'
        }
        this.$store.dispatch('fetchCategories')
          .then(() => { this.loading = false })
          .catch((err) => {
            this.loading = false
            this.$notify({
              type: 'error',
              group: 'error',
              text: err
            })
          })
      },
      createCategory (category) {
        this.loading = { msg: 'Creating new category' }
        this.$store.dispatch('newCategory', category)
          .then((message) => {
            this.loading = false
            this.$notify({
              type: 'info',
              group: 'info',
              title: 'Payment Origin',
              text: message
            })
            this.$modal.hide('category-form')
          })
          .catch((err) => {
            this.loading = false
            this.$notify({
              type: 'error',
              group: 'error',
              title: 'Payment Origin',
              text: err
            })
          })
      },
      editCategory (category) {
        this.loading = { msg: 'Editing category' }
        this.$store.dispatch('editCategory', category)
          .then((message) => {
            this.loading = false
            this.$notify({
              type: 'info',
              group: 'info',
              title: 'Payment Origin',
              text: message
            })
            this.$modal.hide('category-form')
          })
          .catch((err) => {
            this.loading = false
            this.$notify({
              type: 'error',
              group: 'error',
              title: 'Payment Origin',
              text: err
            })
          })
      },
      deleteCategory (expense) {
        this.loading = { msg: 'Removing category' }
        this.$store.dispatch('deleteCategory', expense.id)
          .then((message) => {
            this.loading = false
            this.$notify({
              type: 'info',
              group: 'info',
              title: 'Payment Origin',
              text: message
            })
          })
          .catch((err) => {
            this.loading = false
            this.$notify({
              type: 'error',
              group: 'error',
              title: 'Payment Origin',
              text: err
            })
          })
      }
    },
    computed: mapGetters(['categories', 'categoryColumns']),
    components: { TableModalComponent, Loading }
  }
</script>


<style scoped lang="scss">
  
</style>