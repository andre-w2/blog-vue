<template>
  <mvc-nav-bar />

  <mvc-home />

  <mvc-footer />
</template>

<script>
import MvcNavBar from '@/components/NavBar'
import MvcHome from '@/views/Home'
import MvcFooter from '@/components/Footer'

export default {
  name: 'MvcApp',
  components: {
    MvcNavBar,
    MvcHome,
    MvcFooter
  },
  created() {
    this.$store.dispatch('startPost')
  }
}
</script>