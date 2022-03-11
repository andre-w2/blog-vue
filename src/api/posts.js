import axios from '@/api/axios'

const blog = () => {
	return axios.get('/posts?_page=1&_limit=3')
}

export default {
	blog
}