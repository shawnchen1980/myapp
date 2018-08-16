import React, { Component } from "react";
import PropTypes from "prop-types";

class MyCom extends Component {
  static propTypes = {
    content: PropTypes.string,
    useless: PropTypes.string
  };

  static defaultProps = {
    content: "",
    useless: ""
  };

  constructor(props) {
    super(props);
    console.log("Inside MyCom constructor", props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("Inside MyCom componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { content } = this.props;
    console.log("Inside MyCom shouldComponentUpdate", nextProps, nextState);
    return nextProps.content !== content;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Inside MyCom componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("Inside MyCom componentDidUpdate");
  }

  render() {
    const { content, useless } = this.props;

    return (
      <div>
        <p>{content}</p>
        <p>{useless}</p>
      </div>
    );
  }
}
export default MyCom;
