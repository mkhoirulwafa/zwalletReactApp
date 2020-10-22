const initialState = {
    data: [],
    loading: false,
  };
  
  const Transfer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "TRANSFER_REQUEST":
        return { ...state, loading: true};
      case "TRANSFER_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "TRANSFER_ERROR":
        return { ...state, loading: false, data: [], error: action.payload };  
      default:
        return state;
    }
  };
  export const History = (state = initialState, action = {}) => {
    switch (action.type) {
      case "HISTORY_REQUEST":
        return { ...state, loading: true};
      case "HISTORY_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "HISTORY_ERROR":
        return { ...state, loading: false, data: [], error: action.payload };  
      default:
        return state;
    }
  };
  
  export default Transfer
  