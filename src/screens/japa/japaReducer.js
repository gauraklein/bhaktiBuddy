import {ADD_MANTRA, ADD_ROUND} from "./japaActions"

const japaState = {
    mantraCount: 0,
    roundCount: 0
}

export const japaReducer = (state = japaState, action) => {

    // console.log(state, 'this is the state')
    // console.log(action, "this is the action")
    console.log("reducer")

    switch (action.type) {
        case ADD_MANTRA:
            console.log("Add Mantra hit reducer", state)
            let newMantraCount = state.mantraCount + 1
            console.log(newMantraCount)
            return {
                ...state,
                mantraCount: newMantraCount
            }
        break;
        case ADD_ROUND: 
            console.log("Add Round hit reducer")
            let newRoundCount = state.roundCount + 1
            return {
                ...state,
                roundCount: newRoundCount,
                mantraCount: 0
            }
        break;
        default:
          return state
      }
}