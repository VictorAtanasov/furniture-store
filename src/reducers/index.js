import {combineReducers} from 'redux';
import {registerReducer} from './userReducer';
import {furnitureReducer} from './furnitureReducer';
import {statsReducer} from './statsReducer';

const rootReducer = combineReducers({
    register: registerReducer,
    furniture: furnitureReducer,
    stats: statsReducer
});

export default rootReducer;