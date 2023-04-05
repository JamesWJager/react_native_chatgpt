import {OPENAI_API_KEY} from '@env';
import axios from 'axios';

const axiosClient = axios.create({
	headers: {
		Authorization: 'Bearer' + OPENAI_API_KEY,
	},
});

const params = {
	model: 'gpt-3.5-turbo',
	messages: [{role: 'user', content: 'Hello!'}],
};
