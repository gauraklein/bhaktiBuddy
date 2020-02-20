export const ADD_MANTRA = "ADD_MANTRA"
export const ADD_ROUND = "ADD_ROUND"

export const mantraCountFn = (currentCount) => {
    console.log("hit mantraCountFn")

    if (currentCount < 108) {
        return dispatch => {
            dispatch({
                type: ADD_MANTRA
            })
        }
    } else if (currentCount >= 108) {
        return dispatch => {
            dispatch({
                type: ADD_ROUND
            })
        }
    }
} 