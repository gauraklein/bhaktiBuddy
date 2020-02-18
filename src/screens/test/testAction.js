export const TEST = "TEST"

export const testfn = (dispatch) => {
    console.log("hit test fn")
    return dispatch => {
        dispatch({
            type: TEST
        })
    }
}