import axios from '@/api/axios'

const blog = () => {
	return axios.get('/posts')
}

export default {
	blog
}