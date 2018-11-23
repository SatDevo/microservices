
const initState = {
  usersList: [],
};

export function usersReducer(state = initState, action) {

  switch(action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {...state, usersList: action.payload};
    case 'FETCH_USERS_ERROR':
      return {...state, usersList: action.payload};
    case 'FETCH_TOP_SUCCESS':
      return {...state, userTop: action.payload};
    case 'FETCH_TOP_ERROR':
      return {...state, userTop: action.payload};
    default:
      return initState;
  }
}
