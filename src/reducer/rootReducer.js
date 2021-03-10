import { combineReducers } from "redux";
import { pagination } from "./pagination";
import { students } from "./students";
import { search } from "./search";

export default combineReducers({ pagination, students, search });
