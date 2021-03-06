const initialState = {
  data: [],
  loading: false,
};

const Users = (state = initialState, action = {}) => {
  switch (action.type) {
    case "USERS_REQUEST":
      return { ...state, loading: true };
    case "USERS_SUCCESS":
      return { ...state, loading: false, isLogin: true, data: action.payload };
    case "USERS_ERROR":
      return {
        ...state,
        loading: false,
        isLogin: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const UpdateUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case "UPDATE_USER_REQUEST":
      return { ...state, loading: true };
    case "UPDATE_USER_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "UPDATE_USER_ERROR":
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};
export const DeleteUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "DELETE_USER_ERROR":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default Users
