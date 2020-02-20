import moment from 'moment'
import {TITLE_TEXT_CHANGE, BODY_TEXT_CHANGE, REFLECTION_SUBMIT} from "./reflectionsActions"

const reflectionState = {
    reflectionTitle: "",
    reflectionBody: "",
    reflectionDate: moment().format("MMM Do"),
    userReflection: [] 
}

export const reflectionReducer = (state = reflectionState, action) => {

    // console.log(state, 'this is the state')
    // console.log(action, "this is the action")
    console.log("reducer")

    switch (action.type) {
        case TITLE_TEXT_CHANGE:
            console.log("title change hit reducer", state.reflectionTitle)
            // let newMantraCount = state.mantraCount + 1
            // console.log(newMantraCount)
            return {
                ...state,
                reflectionTitle: action.payload
            }
        break;
        case BODY_TEXT_CHANGE: 
            console.log("body change hit reducer", state.reflectionBody)

            return {
                ...state,
                reflectionBody: action.payload
            }
        break;
        case REFLECTION_SUBMIT:
            console.log("Reflection Submitted")
            let newState = {
                ...state,
                reflectionTitle: "",
                reflectionBody: ""
            }
            let newReflection = {
                reflectionTitle: state.reflectionTitle,
                reflectionBody: state.reflectionBody,
                reflectionDate: moment()
            }

            newState.userReflection.push(newReflection)

            return newState

        default:
          return state
      }
}