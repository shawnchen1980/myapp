import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  CHANGE_INPUT_LETTER,
  CHANGE_LETTER_INDEX
} from "../../actionConstants";

const generateRandomArray = (char, size) => {
  let arr = [...Array(26)].map((v, i) => String.fromCharCode(97 + i));
  // .concat([...Array(26)]
  //         .map((v,i)=>String.fromCharCode(65+i)));
  arr = arr.filter(x => x !== char);
  let arr1 = [];
  while (arr1.length < size - 1) {
    arr1 = arr1.concat(
      arr.splice(Math.round((arr.length - 1) * Math.random()), 1)
    );
  }
  arr1.splice(Math.round(arr1.length * Math.random()), 0, char);
  return arr1;
};

const mapStateToProps = state => {
  const { words, currentIndex, currentLetterIndex, currentInput } = state;
  return {
    options: generateRandomArray(
      words[currentIndex].charAt(currentLetterIndex),
      4
    ),
    currentLetter: words[currentIndex].charAt(currentLetterIndex),
    currentInput,
    currentLetterIndex,
    currentInputLetter: currentInput.charAt(currentLetterIndex)
  };
};
const mapDispatchToProps = dispatch => ({
  changeInputLetter: v => {
    dispatch({ type: CHANGE_INPUT_LETTER, payload: v });
  },
  changeLetterIndex: i => {
    dispatch({ type: CHANGE_LETTER_INDEX, payload: i });
  }
});
class OptionPanel extends Component {
  componentDidUpdate() {
    const {
      currentInputLetter,
      currentLetterIndex,
      currentInput,
      changeLetterIndex
    } = this.props;
    if (currentInputLetter === "?") return;
    if (currentInput.indexOf("?", currentLetterIndex) > 0) {
      changeLetterIndex(currentInput.indexOf("?", currentLetterIndex));
    } else if (currentInput.indexOf("?") >= 0) {
      changeLetterIndex(currentInput.indexOf("?"));
    }
  }

  render() {
    const {
      options,
      currentLetter,
      changeInputLetter,
      currentInput
    } = this.props;
    return (
      <div>
        {options.map(
          (v, i) =>
            v !== currentLetter ? (
              <button type="button" key={i}>
                {v}
              </button>
            ) : (
              <button
                type="button"
                key={i}
                onClick={() => {
                  changeInputLetter(v);
                  console.log(currentInput);
                }}
              >
                {v}
              </button>
            )
        )}
      </div>
    );
  }
}
OptionPanel.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentLetter: PropTypes.string.isRequired,
  currentInput: PropTypes.string.isRequired,
  currentLetterIndex: PropTypes.number.isRequired,
  currentInputLetter: PropTypes.string.isRequired,
  changeInputLetter: PropTypes.func.isRequired,
  changeLetterIndex: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionPanel);
