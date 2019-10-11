import { combineReducers } from 'redux';

import { CLICK, CHECK_CLICK_STATE } from '../actions';
const initialState = {
    isClick: [false, false, false, false, false, false]
}

const reducer = (state = initialState, action) => {
    if (action.type === CLICK) {
        let arr_click = state.isClick;
        switch (action.btn_key) {
            case 0:
                arr_click[action.btn_key] = true;
                return {
                    arr_click
                }
            case 1:
                arr_click[action.btn_key] = true;
                return {
                    arr_click
                }
            case 2:
                arr_click[action.btn_key] = true;
                return {
                    arr_click
                }
            case 3:
                arr_click[action.btn_key] = true;
                return {
                    arr_click
                }
            case 4:
                arr_click[action.btn_key] = true;
                return {
                    arr_click
                }
            case 5:
                arr_click[action.btn_key] = true;
                return {
                    arr_click
                }
            default:
                return state;
        }
    } else if (action.type === CHECK_CLICK_STATE) {
        let allClick = state.isClick.find(click => click === true);
        if (allClick === undefined) {
            return { isClick: [false, false, false, false, false, false] }
        }
    }
}

export default reducer;