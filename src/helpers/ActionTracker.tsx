import { actionTypes as userActions } from "../actions/userActions";
import { actionTypes as searchActions } from "../actions/searchAction";
import { actionTypes as newsActions } from "../actions/newsActions";

const ActionTracker = [
  userActions.LOGIN,
  userActions.SIGNUP,
  newsActions.SCIENCE,
  newsActions.TOPSTORIES,
  newsActions.WORLD,
  searchActions.SEARCHSTORIES,
];

export const loadingList = ActionTracker;

export default ActionTracker;
