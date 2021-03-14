import { combineReducers } from "redux";
import { pagination } from "./pagination";
import { students } from "./students";
import { search } from "./search";
import { connectRouter } from "connected-react-router";

// export default combineReducers({ pagination, students, search });

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    pagination,
    students,
    search,
  });

export default createRootReducer;
