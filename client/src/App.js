import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyCom from "./MyCom";

class App extends Component {
  state = { content: "hello world!", useless: "world hello!" };

  componentWillReceiveProps(nextProps) {
    console.log("Inside App componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // const { content } = this.props;
    console.log("Inside App shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Inside App componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("Inside App componentDidUpdate");
  }

  render() {
    const { content, useless } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input
          value={content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <input
          value={useless}
          onChange={event => this.setState({ useless: event.target.value })}
        />
        <MyCom content={content} useless={useless} />
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
