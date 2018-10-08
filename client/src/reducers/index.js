import * as actions from "../actionConstants";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.CHANGE_LETTER_INDEX:
      return { ...state, currentLetterIndex: action.payload };
    case actions.CHANGE_WORD_INDEX:
      return {
        ...state,
        currentIndex:
          action.payload < state.words.length
            ? action.payload
            : state.currentIndex,
        currentLetterIndex: 0,
        currentInput: "?".repeat(state.words[state.currentIndex].length)
      };
    case actions.CHANGE_INPUT_LETTER:
      console.log("CHANGE_INPUT_LETTER");
      return {
        ...state,
        currentInput:
          state.currentInput.slice(0, state.currentLetterIndex) +
          action.payload +
          state.currentInput.slice(state.currentLetterIndex + 1)
      };
    default:
  }
  return state;
};
