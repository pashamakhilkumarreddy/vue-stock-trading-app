import axios from 'axios';
import store from '@/store';

export default () => axios.create({
  baseURL: '',
  headers: {
    Authorization: `Bearer ${store.state.token}`,
  },
});
