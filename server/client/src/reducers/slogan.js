import { CREATESLOGAN,FETCH_SLOGAN } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (slogans = [], action) => {
  switch (action.type) {
    case FETCH_SLOGAN:
        return action.payload;
    case CREATESLOGAN:
      return [...slogans, action.payload];
    default:
      return slogans;
  }
};
