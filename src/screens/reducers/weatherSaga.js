import { takeLatest, put, select, take } from "redux-saga/effects";
import { WEATHER_ACTION_CONST } from "../../services/const/actionConst";

const {WEATHER_API_CALL_ACTION} = WEATHER_ACTION_CONST;

function* getApiResult(action) {
  console.log('123')
};

export function* weatherSagaWatcher() {
  yield takeLatest (WEATHER_API_CALL_ACTION, getApiResult);
}