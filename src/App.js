import React from "react"

import "./App.css"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  reduceValue = () => {
    if (!this.state.counter <= 0) {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }

  addValue = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  // ============================================================
  render() {
    const buttonStyle = {
      color: "white",
      background: "green",
      border: "0.5px solid black",
      borderRadius: "3px",
      margin: "5px",
      width: "30px"
    }

    // ===================================================================
    return (
      <div className="App">
        <span>{this.state.counter}</span>

        <div>
          <button onClick={this.reduceValue} style={buttonStyle}>
            -
          </button>
          <button onClick={this.addValue} style={buttonStyle}>
            +
          </button>
        </div>
      </div>
    )
  }
}
