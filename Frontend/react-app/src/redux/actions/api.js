export const API_REQUEST = '[app] API Request';

export const apiRequest = (method, url, body, onSuccess, onError) => ({
  type: API_REQUEST,
  meta: {
    method, url, onSuccess, onError
  },
});