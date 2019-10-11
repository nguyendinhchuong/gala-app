export const CLICK = 'CLICK';
export const REVERSE_CLICK_STATE = 'CHECK_CLICK_STATE';

export function clicking(isClick, btn_key) {
    return {
        type: CLICK,
        isClick: isClick,
        btn_key: btn_key
    }
};
export function reverseClickState() {
    return {
        type: REVERSE_CLICK_STATE
    }
}