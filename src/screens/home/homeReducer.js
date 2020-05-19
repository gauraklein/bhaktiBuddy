const homeState = {
    username: "User",
    roundGoal: 16,
    // japaModalVisible: false
}

export const homeReducer = (state = homeState, action) => {

    switch (action.type) {
        // case "SHOW_JAPA_MODAL":
        //     let newState = {
        //         ...state,
        //         japaModalVisible: true
        //     }
        //     return newState;
        // break;
        // case "HIDE_JAPA_MODAL":
        //     nextState = {
        //         ...state,
        //         japaModalVisible: false
        //     }
        //     return nextState;
        // break;
        default:
          return state
      }
}

