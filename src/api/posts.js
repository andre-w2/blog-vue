import axios from '@/api/axios'

const blog = url => {
	return axios.get(`${url}`)
}

export default {
	blog
}