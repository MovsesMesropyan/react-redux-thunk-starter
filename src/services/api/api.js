import axios from 'axios';

const API = {
	getPosts: () => {
		return axios.get(`https://jsonplaceholder.typicode.com/posts`);
	},

	getPostDetails: id => {
		return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
	}
};

export default API;
