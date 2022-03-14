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
    <mvc-pagination :total="50" :current-page="currentPage" />

  </template>

  <div v-else class="notification is-warning is-light">
    Загрузка данных
  </div>

</template>


<script>
  import { mapState } from 'vuex'
  import MvcPagination from '@/components/Pagination'
  import {stringify, parseUrl} from 'query-string'

  export default {
    name: 'MvcPost',
    components: {
      MvcPagination
    },
    data() {
      return {
        url: 'posts',
      }
    },
    mounted() {
      this.$store.dispatch('startPost', this.url)
    },
    computed: {
      ...mapState({
        posts: state => state.posts.posts,
        isLoading: state => state.posts.isLoading,
      }),
      currentPage() {
        return Number(this.$route.query.page || '1')
      }      
    },
    methods: {
      startPost() {
        const parsedUrl = parseUrl(this.url)
        const stringifiedParams = stringify({
          _page: this.currentPage,
          ...parsedUrl.query
        })
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`

        this.$store.dispatch('startPost', apiUrlWithParams)
      }
    },
    watch: {
      currentPage() {
        this.startPost()
      }
    }
  }
</script>