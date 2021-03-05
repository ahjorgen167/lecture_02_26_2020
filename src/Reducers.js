import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import TimesClickedReducer from './TimesClickedReducer'

export default combineReducers({

    count: CounterReducer, //{type: "INCREASE"}
    timesClicked: TimesClickedReducer,  //{type: "INCREASE"}

})