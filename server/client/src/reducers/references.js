import { REFERENCEFETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (references = [], action) => {
  switch (action.type) {
    case REFERENCEFETCH_ALL:
      return action.payload;
    case CREATE:
      return [...references, action.payload];
    case UPDATE:
      return references.map((reference) =>
        reference._id === action.payload._id ? action.payload : reference
      );
    case DELETE:
      return references.filter((reference) => reference._id === action.payload);
    default:
      return references;
  }
};
