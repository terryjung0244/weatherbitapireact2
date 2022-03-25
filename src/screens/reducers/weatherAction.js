import { WEATHER_ACTION_CONST } from "../../services/const/actionConst";

const {
  WEATHER_API_CALL_ACTION,
  WEATHER_API_CALL_SUCCESS
} = WEATHER_ACTION_CONST;

export const weatherReducerWeatherApiCallAction = (city) => {
  return {
    type: WEATHER_API_CALL_ACTION, payload: city
  }
}

export const weatherReducerWeatherApiCallSuccess = () => {
  return {
    type: WEATHER_API_CALL_SUCCESS, 
  }
}