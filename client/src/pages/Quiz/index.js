import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AnswerPanel from "./AnswerPanel";
import OptionPanel from "./OptionPanel";
import { CHANGE_WORD_INDEX } from "../../actionConstants";

const mapStateToProps = state => {
  const { words, currentIndex, hints, currentInput } = state;
  return {
    word: words[currentIndex],
    hint: hints[currentIndex],
    currentInput,
    currentIndex
  };
};
const mapDispatchToProps = dispatch => ({
  changeWordIndex: v => {
    dispatch({ type: CHANGE_WORD_INDEX, payload: v });
  }
});
class Quiz extends Component {
  componentDidUpdate() {
    const { currentIndex, changeWordIndex, currentInput } = this.props;
    if (currentInput.indexOf("?") >= 0) return;
    changeWordIndex(currentIndex + 1);
  }

  render() {
    const { word, hint } = this.props;
    return (
      <div>
        {word} {hint}
        <AnswerPanel />
        <OptionPanel />
      </div>
    );
  }
}
Quiz.propTypes = {
  word: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
  changeWordIndex: PropTypes.func.isRequired,
  currentInput: PropTypes.string.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
