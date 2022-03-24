import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cityList } from '../../cityList';
import { weatherReducerWeatherApiCallAction } from '../reducers/weatherAction';

const WeatherComp = () => {

  const weatherReducerSelector = useSelector(state => state.weatherReducer);

  const dispatch = useDispatch();

  const onClickCity = () => {
    dispatch(weatherReducerWeatherApiCallAction());
  }

  return (
    <div>
      <div>
        {cityList.map((city, index) => {
          return (
            <div onClick={onClickCity} key={city.cityName}>
              {city.cityName}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeatherComp
