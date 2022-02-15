import * as types from "./actionTypes";

export function getGitRepList() {
  return {
    type: types.GIT_REPO_LIST_REQUEST,
  };
}

export function updateGitRepList(action) {
  return {
    type: types.GIT_REPO_LIST_UPDATE,
    action: action,
  };
}
