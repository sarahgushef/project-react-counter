import React from "react"

import "./App.css"

// function App() {
//   let value = 0

//   const reduceValue = () => {
//     return value - 1
//   }

//   return (
//     <div className="App">
//       <span>{value}</span>

//       <div>
//         <button onClick="reduceValue()">-</button>
//         <button onClick="addValue()">+</button>
//       </div>
//     </div>
//   )
// }

// export default App

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

        <p>CSSnya nanti dulu ya hehehehe</p>
      </div>
    )
  }
}
