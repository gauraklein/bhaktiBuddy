export const TEST = "TEST"

export const testfn = () => {
    console.log("hit test fn")
    return dispatch => {
        dispatch({
            type: TEST
        })
    }
}