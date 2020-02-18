import {TEST} from "../test/testAction"

const testState = {
    text: "TESTING THIS OUT"
}

export const testReducer = (state = testState, action) => {

    // console.log(state, 'this is the state')
    // console.log(action, "this is the action")
    console.log("reducer")

    switch (action.type) {
        case TEST:
            console.log("test hit reducer")
            return {
                ...state,
                text: "BROCCOLI"
            }
        default:
          return state
      }
}