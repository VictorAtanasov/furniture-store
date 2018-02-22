import {combineReducers} from 'redux';
import {registerReducer} from './userReducer';
import {furnitureReducer} from './furnitureReducer';

const rootReducer = combineReducers({
    register: registerReducer,
    furniture: furnitureReducer
});

export default rootReducer;