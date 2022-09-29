import { FETCH_STATISTIC, UPDATESTATISTIC } from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (statistic = [], action) => {
  switch (action.type) {
    case FETCH_STATISTIC:
      return action.payload;
    case UPDATESTATISTIC:
      return action.payload;
    default:
      return statistic;
  }
};
