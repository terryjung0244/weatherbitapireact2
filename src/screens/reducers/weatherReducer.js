import produce from 'immer';
import { WEATHER_ACTION_CONST } from "../../services/const/actionConst";

const {WEATHER_API_CALL_ACTION} = WEATHER_ACTION_CONST;

const initState = {

}

export default function weatherReducer(state = initState, action) {
  return produce(state, draft => {
    
    switch (action.type) {
      case WEATHER_API_CALL_ACTION:
        console.log("checking reducer")
        break;
      default:      
      return state;
    }
  })
};