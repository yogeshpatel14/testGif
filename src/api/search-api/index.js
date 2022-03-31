import {FETCH_GET_API_CALL} from '../../services';

const API_CALL_SEARCH_AUTOSUGGESTION_GIF = endPoint => {
  return new Promise((resolve, reject) => {
    FETCH_GET_API_CALL(endPoint)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export {API_CALL_SEARCH_AUTOSUGGESTION_GIF};
