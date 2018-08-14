import React, { Component } from "react";

//UI component
// class Ninjas extends Component {//const Ninjas = () => {

//functional component
const Ninjas = ({ninjas}) => {

  //not needed for functional
  // render() {
    // const { ninjas } = props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <div>name: {ninja.name}</div>
          <div>age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
        </div>
      );
    });
    return( <div className="ninja-list">{ninjaList}</div>
    )
  }
export default Ninjas;
