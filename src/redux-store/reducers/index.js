import { combineReducers } from 'redux';
import auth from './auth-reducer';
import message from './message-reducer';
import room from './room-reducer'

export default combineReducers({
    auth,
    message,
    room
});