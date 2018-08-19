import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Abby", age: 13, belt: "black", id: 1 },
      { name: "Steph", age: 48, belt: "blue", id: 2 },
      { name: "Judy", age: 69, belt: "purple", id: 3 }
    ]
  }

  addNinja =(ninja) => {
     ninja.id = Math.random();
     let ninjas = [...this.state.ninjas, ninja]
     this.setState({
       ninjas: ninjas
     })
    console.log(ninja);
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>my 4th react app</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
