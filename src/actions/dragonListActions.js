export const addMember = memberName => (
    { type: "ADD_MEMBER", payload: memberName }
);

export const toggleDragonStatus = memberIndex => (
    { type: "TOGGLE_DRAGON_STATUS", payload: memberIndex }
)
