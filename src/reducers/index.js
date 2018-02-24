import {combineReducers} from 'redux';
import {registerReducer} from './userReducer';
import {furnitureReducer} from './furnitureReducer';
import {statsReducer} from './statsReducer';
import {commentsReducer} from './commentsReducer';
import {getCommentsReducer} from './getCommentsReducer';

const rootReducer = combineReducers({
    register: registerReducer,
    furniture: furnitureReducer,
    stats: statsReducer,
    comments: commentsReducer,
    getComments: getCommentsReducer
});

export default rootReducer;