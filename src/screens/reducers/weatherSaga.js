import { takeLatest, put, select, take } from "redux-saga/effects";
import { WEATHER_ACTION_CONST } from "../../services/const/actionConst";

const { WEATHER_API_CALL_ACTION, } = WEATHER_ACTION_CONST;

const addDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000)
  })
}; 

//d46fe6f3b2e44fb8b52873c21312b71f
//https://api.weatherbit.io/v2.0/current?city=""&country=""&key=""
//GET
// (`https://api.weatherbit.io/v2.0/current?
//   city=${}&country=${}&key="d46fe6f3b2e44fb8b52873c21312b71f"`)

function* getApiResult (action) {
  console.log(action.payload)
  let apiResult = yield fetch(`https://api.weatherbit.io/v2.0/current?city=${action.payload.cityName}&country=${action.payload.country}&key="d46fe6f3b2e44fb8b52873c21312b71f`)
  apiResult = yield apiResult.json();
  console.log(apiResult);
  
}

export function* weatherSagaWatcher() {
  yield takeLatest (WEATHER_API_CALL_ACTION, getApiResult)
}