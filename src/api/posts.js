import axios from '@/api/axios'

const blog = () => {
	return axios.get('/posts?_page=1')
}

export default {
	blog
}