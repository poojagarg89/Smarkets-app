import * as types from "../action/actionTypes";

const initialState = {
  isFetching: false,
  gitRepoList: [],
};

export default function getGitRepoDetails(state = initialState, action) {
  switch (action.type) {
    case types.GIT_REPO_LIST_REQUEST:
      return { ...state, isFetching: true };

    case types.GIT_REPO_LIST_SUCCESS:
      return { isFetching: false, gitRepoList: action.gitRepoList };

    case types.GIT_REPO_LIST_ERROR:
      return { ...state, isFetching: false, error: action.message };

    case types.GIT_REPO_LIST_UPDATE_SUCCESS:
      return { isFetching: false, gitRepoList: action.gitRepoList };

    default:
      return state;
  }
}
