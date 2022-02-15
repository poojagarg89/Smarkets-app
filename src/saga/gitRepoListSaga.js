import { takeLatest, call, put, all } from "redux-saga/effects";

import * as types from "../action/actionTypes";
import getGitRepList from "../api/api";

function* gitRepoListSaga() {
  try {
    const gitRepoList = yield call(getGitRepList);
    yield put({
      type: types.GIT_REPO_LIST_SUCCESS,
      gitRepoList: gitRepoList.data.items,
    });
  } catch (e) {
    yield put({ type: types.GIT_REPO_LIST_ERROR, message: e.message });
  }
}

function* updateRepoListSaga(action) {
  try {
    const actionObj = action.action;
    actionObj.repoList.forEach((data) => {
      if (data.id === actionObj.rowItem.id) {
        data.favourite = actionObj.value;
      }
    });
    yield put({
      type: types.GIT_REPO_LIST_UPDATE_SUCCESS,
      gitRepoList: actionObj.repoList,
    });
  } catch (e) {
    console.log("Error in updating list");
  }
}

function* actionWatcher() {
  yield takeLatest(types.GIT_REPO_LIST_REQUEST, gitRepoListSaga);
  yield takeLatest(types.GIT_REPO_LIST_UPDATE, updateRepoListSaga);
}

export default function* getGitRepoListSaga() {
  yield all([actionWatcher()]);
}
