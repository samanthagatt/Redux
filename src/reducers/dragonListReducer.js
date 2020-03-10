const initialState = {
    members: [
        { name: 'Justin T', dragonStatus: true },
        { name: 'Justin A', dragonStatus: false }
      ]
}

export const dragonListReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_MEMBER":
            const newMember = { name: action.payload, dragonStatus: false }
            return { 
                ...state, 
                members: [
                    ...state.members, 
                    newMember
                ]
            };
        case "TOGGLE_DRAGON_STATUS":
            const newMembers = [...state.members]
            const member = newMembers[action.payload]
            member.dragonStatus = !member.dragonStatus
            return {
                ...state,
                members: newMembers
            }
        default: return state;
    }
}