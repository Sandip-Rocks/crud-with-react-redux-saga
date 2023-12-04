import {
  getUserAPI,
  getUserByIdAPI,
  createUserAPI,
  updateUser,
  deleteUserByIdAPI,
} from "../../apis";
import {
  getUsersSlice,
  addUserSlice,
  editUserSlice,
  deleteUserSlice,
} from "../slice/users";
import { put, takeEvery } from "redux-saga/effects";
import {
  CREATE_USER,
  DELETE_USER_BY_ID,
  GET_USERS,
  GET_USER_BY_ID,
  UPDATE_USER_BY_ID,
} from "./types";

export function* getUsersSaga() {
  const users = yield getUserAPI();
  yield put(getUsersSlice(users.data));
}
export function* getUserByIdSaga(id) {
  const user = yield getUserByIdAPI(id);
  yield put(getUsersSlice(user));
}

export function* createUserSaga(action) {
  createUserAPI(action.user);
  yield put(addUserSlice(action.user));
}

export function* updateUserSaga(action) {
  yield updateUser(action.user);
  yield put(editUserSlice(action.user));
}

export function* deleteUserSaga(action) {
    console.log('action ', action);
  yield deleteUserByIdAPI(action.id);
  yield put(deleteUserSlice(action.id));
}

export function* watchUsersAsync() {
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(GET_USER_BY_ID, getUserByIdSaga);
  yield takeEvery(UPDATE_USER_BY_ID, updateUserSaga);
  yield takeEvery(DELETE_USER_BY_ID, deleteUserSaga);
  yield takeEvery(CREATE_USER, createUserSaga);
}
