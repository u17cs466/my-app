//reducer is function
const INITIAL_STATE = {
  firstName: "Srikanth",
  lastName: "Damacharla"
};
export const UserReducer = (state = INITIAL_STATE, action) => {
  
  if (action.type === 'UPDATE_FIRST_NAME') {
    const newState = { ...state };
    newState.firstName = action.value;
    return newState;
  }

  if (action.type === 'UPDATE_LAST_NAME') {
    const newState = { ...state };
    newState.lastName = action.value;
    return newState;
  }
  return state;

}