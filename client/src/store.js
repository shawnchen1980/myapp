import { createStore } from "redux";
import reducer from "./reducers";

const initialValue = {
  words: ["hello", "world"],
  hints: ["你好", "世界"],
  currentIndex: 0,
  // currentInput: "?".repeat(this.words[0].length),
  currentLetterIndex: 0
};
initialValue.currentInput = "?".repeat(
  initialValue.words[initialValue.currentIndex].length
);
export default createStore(reducer, initialValue);
