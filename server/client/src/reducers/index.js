import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import references from "./references";
import statistic from "./statistic";
import slogan from "./slogan";
import principle from "./principle"
export default combineReducers({
  posts,
  auth,
  references,
  statistic,
  slogan,
  principle,
});
