const homeState = {
    username: "User",
    roundGoal: 16,
    japaModalVisible: true

}

export const homeReducer = (state = homeState, action) => {

    switch (action.type) {
        // TODO: make this work
        case "SHOW_JAPA_MODAL":
            console.log("japa modal hit reducer")
            let newState = {
                ...state,
                AddJapaModalVisible: true
            }
            return newState;
        break;
        case "HIDE_JAPA_MODAL":
            newState = {
                ...state,
                japaModalVisible: false
            }
            return newState;
        break;
        default:
          return state
      }
}

