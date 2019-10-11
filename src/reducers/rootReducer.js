
import { CLICK, REVERSE_CLICK_STATE } from '../actions';
const initialState = {
    style: {
        border: '2px solid #555555',
        backgroundColor: '#cccccc'
    },
    isClick: [false, false, false, false, false, false]
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case CLICK:
            const { style, isClick } = state;
            switch (action.btn_key) {
                case 0:
                    isClick[action.btn_key] = true;
                    return {
                        isClick,
                        style
                    }
                case 1:
                    isClick[action.btn_key] = true;
                    return {
                        isClick,
                        style
                    }
                case 2:
                    isClick[action.btn_key] = true;
                    return {
                        isClick,
                        style
                    }
                case 3:
                    isClick[action.btn_key] = true;
                    return {
                        isClick,
                        style
                    }
                case 4:
                    isClick[action.btn_key] = true;
                    return {
                        isClick,
                        style
                    }
                case 5:
                    isClick[action.btn_key] = true;
                    return {
                        isClick,
                        style
                    }
                default:
                    return state;
            }
        case REVERSE_CLICK_STATE:
            return {
                isClick: [false, false, false, false, false, false],
                style: {
                    border: '2px solid #555555',
                    backgroundColor: '#cccccc'
                },
                isAllClick: false
            }
        default:
            return state;
    }

}

export default reducer;