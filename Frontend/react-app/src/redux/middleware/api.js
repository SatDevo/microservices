import axios from 'axios';

import {API_REQUEST} from "../actions/api";

const Authorization = { token: '123456', isSet: true };

const AxiosConfig = (meta) => {
  let axiosConfig = {
    method: meta.method.toLowerCase(), url: meta.url, params: meta.params,
    headers : (Authorization.token && !Authorization.isSet) ? { 'Authorization': 'Bearer ' + Authorization.token } : {}
  };
  if (meta.data !== undefined)
      axiosConfig.data = meta.data;
  return axiosConfig;
}

export const  api = ({ dispatch, getState }) => next => action => {
  const meta = (action.meta) ? { ...action.meta } : {};
  console.log(action);
  if(action.type === API_REQUEST) {
      if ((!meta.url)) 
        return next(action);
      const axiosConfig = AxiosConfig(meta);
      axios(axiosConfig).then(response => dispatch({ type: meta.onSuccess,payload: response.data }))
      .catch(responseError => dispatch({ type: meta.onError, responseError }));
    }

  return next(action)
}
