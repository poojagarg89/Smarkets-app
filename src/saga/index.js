import { fork } from "redux-saga/effects";
import getGitRepoListSaga from "./gitRepoListSaga";

function* sagas() {
  yield fork(getGitRepoListSaga);
}

export default sagas;
