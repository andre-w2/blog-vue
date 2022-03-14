import postApi from '@/api/posts.js'

const state = {
	isLoading: null,
	posts: null,
	fatalError: null
}

const mutations = {
	start(state) {
		state.isLoading = false
		state.posts = null
	},
	finish(state, payload) {
		state.isLoading = true
		state.posts = payload
	},
	error(state) {
		state.isLoading = false
		state.fatalError = true
	}
}

const actions = {
	startPost(context, url) {
		context.commit('start')
		return new Promise(() => {
			postApi.blog(url)
			.then(response => {
				context.commit('finish', response.data)
			})
			.catch(error => {
				context.commit('error')
				console.log(error)
			})
		})
	}
}

export default {
	state,
	mutations,
	actions
}