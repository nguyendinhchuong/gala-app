export const CLICK = 'CLICK';
export const CHECK_CLICK_STATE = 'CHECK_CLICK_STATE';

export function clicking(isClick, btn_key) {
    return {
        type: CLICK,
        isClick: isClick,
        btn_key: btn_key
    }
};
export function checkAllClick(click_state) {
    return {
        type: CHECK_CLICK_STATE,
        click_state: click_state
    }
}