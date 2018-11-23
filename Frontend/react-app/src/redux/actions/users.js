export const FETCH_USERS         = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = '[users] Fetch users success';
export const FETCH_USERS_ERROR   = '[users] Fetch users Error';


export const FETCH_TOP           = 'FETCH_TOP';
export const FETCH_TOP_SUCCESS   = '[users] Fetch top success';
export const FETCH_TOP_ERROR     = '[users] Fetch top Error';

export const getUsers = () => ({
  type: FETCH_USERS
});

export const getTop = () => ({
  type: FETCH_TOP
});


export const apiRequest = (method, url, body, onSuccess, onError) => ({
    type: '[app] API Request',
    meta: {
      method, url, onSuccess, onError
    },
  });

