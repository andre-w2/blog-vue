<template>
  <template v-if="isLoading">
    <div v-for="post in posts" :key="post.id" class="card">
      <div class="card-image">
        <figure class="image">
          <img src="@/assets/800x480.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="@/assets/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          {{ post.title }}
          <br>
          <time>{{ new Date().toLocaleDateString() }}</time>
        </div>
      </div>
    </div>
    <mvc-pagination :total="posts.length" :current-page="currentPage" />
  </template>
</template>


<script>
  import { mapState } from 'vuex'
  import MvcPagination from '@/components/Pagination'

  export default {
    name: 'MvcPost',
    components: {
      MvcPagination
    },
    computed: {
      ...mapState({
        posts: state => state.posts.posts,
        isLoading: state => state.posts.isLoading,
      }),
      currentPage() {
        return parseInt(this.$route.query.page)
      }      
    }
  }
</script>