import {
  AUTH,
  LOGOUT,
  SIGNUP,
  USERFETCH_ALL,
  DELETEUSER,
  UPDATEUSER,
  USERDETAILSFETCH_ALL
} from "../constants/actionTypes";

const authReducer = (state = [], action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };

    case SIGNUP:
      return [...state, action.payload];
      
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    case USERFETCH_ALL:
      return action.payload;
    
    case USERDETAILSFETCH_ALL:
      return action.payload;

      case UPDATEUSER:
        return state.map((user) =>
        user._id === action.payload._id ? action.payload : user
        );
        
    case DELETEUSER:
      return state.filter((user) => user._id === action.payload);
    default:
      return state;
  }
};

export default authReducer;
