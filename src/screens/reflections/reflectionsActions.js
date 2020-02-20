export const TITLE_TEXT_CHANGE = "TITLE_TEXT_CHANGE"
export const BODY_TEXT_CHANGE = "BODY_TEXT_CHANGE"

export const handleTitleChange = (text) => {
    console.log("hit title change fn")

    return dispatch => {
        dispatch({
            type: TITLE_TEXT_CHANGE,
            payload: text
        })
    }
}

export const handleBodyChange = (text) => {
    console.log("hit body change fn")

    return dispatch => {
        dispatch({
            type: BODY_TEXT_CHANGE,
            payload: text
        })
    }
}