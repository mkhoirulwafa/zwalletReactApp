const initialState = {
    data: [],
    loading: false,
  };
  
  const Transfer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "TRANSFER_REQUEST":
        return { ...state, loading: true};
      case "TRANSFER_SUCCESS":
        return { ...state, loading: false, isLogin:true, data: action.payload };
      case "TRANSFER_ERROR":
        return { ...state, loading: false, isLogin:false, data: [], error: action.payload };  
      default:
        return state;
    }
  };
  
  export default Transfer
  