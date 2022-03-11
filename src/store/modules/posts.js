import postApi from '@/api/posts.js'

const state = {
	isLoading: null,
	posts: null,
	fatalError: null
}

const mutations = {
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
	start(context) {
		return new Promise(() => {
			postApi.blog()
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