
// Creates an action object that redux will dispatch to the reducer automatically
export const toggleEditing = () => (
  { type: "TOGGLE_EDITING" }
);

export const updateTitle = newTitle => (
    { type: "UPDATE_TITLE", payload: newTitle }
);