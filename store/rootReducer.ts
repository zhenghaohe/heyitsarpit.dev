import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // Add your reducers here
});

/**
 *  Type for global app state
 */
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
