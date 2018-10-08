import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CHANGE_LETTER_INDEX } from "../../actionConstants";

const mapStateToProps = state => {
  const { words, currentIndex, currentInput, currentLetterIndex } = state;
  return {
    input:
      currentInput === ""
        ? "?".repeat(words[currentIndex].length)
        : currentInput,
    index: currentLetterIndex
  };
};
const mapDispatchToProps = dispatch => ({
  changeLetterIndex: i => {
    dispatch({ type: CHANGE_LETTER_INDEX, payload: i });
  }
});
// class AnswerPanel extends Component {
//   render() {
const AnswerPanel = ({ input, changeLetterIndex, index }) => (
  <div>
    {input.split("").map((v, i) => (
      <span
        key={i}
        onClick={() => {
          changeLetterIndex(i);
        }}
      >
        {i === index ? `(${v})` : v}
      </span>
    ))}
  </div>
);
//   }
// }
AnswerPanel.propTypes = {
  input: PropTypes.string.isRequired,
  changeLetterIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerPanel);
