import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./addNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Abby", age: 13, belt: "black", id: 1 },
      { name: "Steph", age: 48, belt: "blue", id: 2 },
      { name: "Judy", age: 69, belt: "purple", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>my 4th react app</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    )
  }
}

export default App;
