import {ADD_MANTRA, ADD_ROUND} from "./japaActions"

const japaState = {
    mantraCount: 0,
    roundCount: 0,
    japaModalVisible: false,
    japaModalValue: 0
}

export const japaReducer = (state = japaState, action) => {

    switch (action.type) {
        case ADD_MANTRA:
            console.log("Add Mantra hit reducer", state)
            let newMantraCount = state.mantraCount + 1
            console.log(newMantraCount)
            return {
                ...state,
                mantraCount: newMantraCount
            }

        case ADD_ROUND: 
            console.log("Add Round hit reducer")
            let newRoundCount = state.roundCount + 1
            return {
                ...state,
                roundCount: newRoundCount,
                mantraCount: 0
            }

        case "ADD_ROUND_MANUALLY":
            let manualRoundCount = action.payload + state.roundCount
            return {
                ...state,
                roundCount: manualRoundCount
            }

        case "SHOW_JAPA_MODAL":
            return {
                ...state,
                japaModalVisible: true
            }

        case "HIDE_JAPA_MODAL":
            return {
                ...state,
                japaModalVisible: false
            }

        case "UPDATE_JAPA_MODAL_VALUE": 
            console.log(action.payload, "this should match the value of the input")
            return {
                ...state,
                japaModalValue: action.payload
            }
        default:
          return state
      }
}