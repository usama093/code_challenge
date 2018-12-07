const initialState = {
  message: "They called the Enterprise a garbage scow!"
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "RESET_COMM":
      newState.message = action.value;
      break;

    case "UPDATE_COMM":
      newState.message = action.value;
      break;
  }
  return newState;
};

export default reducer;
