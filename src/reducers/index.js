import {combineReducers} from 'redux';
import {registerReducer} from './userReducer';

const rootReducer = combineReducers({
    register: registerReducer
});

export default rootReducer;