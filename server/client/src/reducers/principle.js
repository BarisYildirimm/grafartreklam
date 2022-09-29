import { FETCH_PRINCIPLE,CREATEPRINCIPLE,UPDATEPRINCIPLE,DELETEPRINCIPLE } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (principles = [], action) => {
  switch (action.type) {
    case FETCH_PRINCIPLE:
      return action.payload;
    case CREATEPRINCIPLE:
      return [...principles, action.payload];
    case UPDATEPRINCIPLE:
      return principles.map((principle) =>
      principle._id === action.payload._id ? action.payload : principle
      );
    case DELETEPRINCIPLE:
      return principles.filter((principle) => principle._id === action.payload);
    default:
      return principles;
  }
};
