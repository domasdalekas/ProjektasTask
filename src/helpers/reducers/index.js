import {gasReducer} from './GasReducer';
import {combineReducers} from 'redux';
import {OrderReducer} from './OrderReducer'
import {FinishedOrderReducer} from './FinishedOrdersReducer'

export default combineReducers({
  gasTanks: gasReducer,
  Orders : OrderReducer,
  FinishedOrders : FinishedOrderReducer,
});