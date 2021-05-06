import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { FetchSuccess, FetchFailure } from "../redux/FetchActions";
import * as actions from "../redux/FetchActionsType";

const getApi = fetchUrl => {
  return (
    axios.get(fetchUrl)
    .then(res => res.data)
    .catch(err => { throw err })
  )
}

export default function* RequestsSaga(GetData) {
  yield takeEvery(actions.FETCH_REQUEST, GetData, getApi)
}