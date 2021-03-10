import { actionType } from "../action/actionType";

export const pagination = (
  state = {
    currentPage: 1,
  },
  action
) => {
  switch (action.type) {
    case actionType.MOVE_EXACTLY_TO_PAGE: {
      return {
        ...state,
        currentPage: action.payload.page,
      };
    }
    case actionType.CHANGE_SEARCHING_VALUE: {
      return {
        ...state,
        currentPage: 1,
      };
    }
    default:
      return state;
  }
};
