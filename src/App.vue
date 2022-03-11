<template>
  <mvc-nav-bar />

  <div class="content">
    <mvc-post />
  </div>
</template>

<script>
import MvcNavBar from '@/components/NavBar'
import MvcPost from '@/components/Post'

export default {
  name: 'MvcApp',
  components: {
    MvcNavBar,
    MvcPost
  },
  created() {
      this.$store.dispatch('start')
  }
}
</script>