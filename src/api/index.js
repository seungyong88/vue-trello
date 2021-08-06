import axios from 'axios'
import router from '../router';

const DOMAIN = 'http//localhost:3000';
const UNAUTHORIZED = 401;

const onUnauthrorized = () => {
  router.push('/login');
}

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN+url,
    data
  }).then(result => result.data)
  .catch(result => {
    if(result.status === UNAUTHORIZED) {
      return onUnauthrorized();
    }

    throw Error(result);
  })
} 


export const board = {
  fetch() {
    return request('get', '/board');
  }
}
