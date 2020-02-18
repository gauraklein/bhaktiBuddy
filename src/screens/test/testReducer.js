const testState = {
    text: "TESTING THIS OUT"
}

export const testReducer = (state = testState, action) => {

    console.log(state, 'this is the state')
    // console.log(action, "this is the action")

    return state;
}