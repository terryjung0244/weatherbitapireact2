import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cityList } from '../../cityList';

const WeatherComp = () => {

  const weatherReducerSelector = useSelector(state => state.weatherReducer);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {cityList.map((city, index) => {
          return (
            <div key={city.cityName}>
              {city.cityName}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeatherComp
