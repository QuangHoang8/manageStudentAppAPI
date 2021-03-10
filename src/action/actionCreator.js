import { actionType } from "./actionType";
import { appConstants } from "../constants";
import { getStudent } from "../studentService";

export const moveExactlyToPage = (page) => ({
  type: actionType.MOVE_EXACTLY_TO_PAGE,
  payload: {
    page,
  },
});

export const changeSearchingValue = (value) => ({
  type: actionType.CHANGE_SEARCHING_VALUE,
  payload: {
    value,
  },
});

export const editStudent = (modifiedStudent) => ({
  type: actionType.MODIFY_STUDENT.SAVE,
  payload: {
    modifiedStudent,
  },
});

export const saveStudent = (newStudent) => ({
  type: actionType.ADD_STUDENT.SAVE,
  payload: {
    newStudent,
  },
});

export const refreshStudentList = () => {
  return async function (dispatch, getState) {
    const state = getState();
    const searchValue = state.search.searchValue;
    const currentPage = state.pagination.currentPage;
    dispatch({
      type: actionType.START_REFRESH_STUDENT_LIST,
    });
    try {
      const data = await getStudent(
        searchValue,
        currentPage,
        appConstants.pageSize
      );

      dispatch({
        type: actionType.REFRESH_STUDENT_LIST_SUCCESS,
        payload: {
          students: data.data,
          totalItems: data.meta.totalItem,
        },
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: actionType.REFRESH_STUDENT_LIST_FAIL,
      });
    }
  };
};
