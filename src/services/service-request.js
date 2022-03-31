import {BASE_URL} from './url-schema';

const FETCH_GET_API_CALL = endPoint => {
  return new Promise((resolve, rejects) => {
    fetch(BASE_URL + endPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => rejects(err));
  });
};

export {FETCH_GET_API_CALL};
