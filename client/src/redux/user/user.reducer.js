import userActionTypes from './userActionTypes';

const INITIAL_STATE = {
    user: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.FETCHUSER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;