<template>
  <mvc-nav-bar />

  <div class="content">
    <mvc-post />
    <mvc-pagination />
  </div>

  <mvc-footer />
</template>

<script>
import MvcNavBar from '@/components/NavBar'
import MvcPost from '@/components/Post'
import MvcPagination from '@/components/Pagination'
import MvcFooter from '@/components/Footer'

export default {
  name: 'MvcApp',
  components: {
    MvcNavBar,
    MvcPost,
    MvcPagination,
    MvcFooter
  },
  created() {
      this.$store.dispatch('start')
  }
}
</script>