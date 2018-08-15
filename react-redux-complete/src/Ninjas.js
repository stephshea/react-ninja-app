import React, { Component } from "react";

//UI component
// class Ninjas extends Component {//const Ninjas = () => {

//functional component
const Ninjas = ({ninjas}) => {

    const ninjaList = ninjas.map(ninja => {
      if (ninja.age > 20){
        return (
          <div className="ninja" key={ninja.id}>
            <div>name: {ninja.name}</div>
            <div>age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
          </div>
        );
      } else {
          return
      }
    });
    return( <div className="ninja-list">{ninjaList}</div>
    )
  }
export default Ninjas;

// ternery alternative
// const Ninjas = ({ninjas}) => {
//   return(
//     <div className="ninja-list">
//       {
//         ninjas.map(ninja => {
//           return ninja.age > 20 ? (
//             <div className="ninja" key={ninja.id}>
//               <div>name: {ninja.name}</div>
//               <div>age: {ninja.age}</div>
//               <div>Belt: {ninja.belt}</div>
//             </div>
//           ) : null;
//         })
//       }
//     </div>
//     )