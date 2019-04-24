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
    this.setState({
      counter: this.state.counter - 1
    })
  }

  addValue = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  //================================
  render() {
    return (
      <div className="App">
        <span>{this.state.counter}</span>

        <div>
          <button onClick={this.reduceValue}>-</button>
          <button onClick={this.addValue}>+</button>
        </div>

        <p>CSSnya nanti dulu ya hehehehe </p>
      </div>
    )
  }
}
