<template>
	<nav class="pagination">
		<ul class="pagination-list">
			<li v-for="page in pages" :key="page">
				<router-link :to="{query: {page: page}}"
				class="pagination-link" 
				:class="{'is-current': currentPage === page}">{{page}}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	import {range} from '@/helpers/utils'
	export default {
		name: 'MvcPagination',
		props: {
			total: {
				type: Number,
				required: true
			},
			limit: {
				type: Number,
				required: true
			},
			currentPage: {
				type: Number,
				required: true
			}
		},
		computed: {
			pages() {
				const count = Math.ceil(this.total / this.limit)
				return range(1, count)
			}
		}
	}
</script>