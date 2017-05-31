
import React, { Component, } from 'react';
import { gql, graphql } from 'react-apollo';
import logo from './logo.svg';

import './app.css';

var input;


class App extends Component {

  active(){
    alert(JSON.stringify(this.props.data))
    input = document.getElementById("userInput");
    if(input.value !==""){
      document.getElementById("textBox").value+=this.props.data.User.name + input.value + "\n" ;
      alert(Usuario);

      document.getElementById("userInput").value="";}
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Apollo Talk</h2>
      <ul className="flex-container">
        <li className="flex-item1"><textarea disabled="true" name="message" rows="10" cols="30" id="textBox">
</textarea> <form>
  Ingrese mensaje: <input type="text" className="fname" id="userInput"></input>


</form></li>
        <li className="flex-item2">
         <button className="App-square" onClick={() => this.active()}>PRESS ME

      </button></li>
        <li className="flex-item3"><form>
          Nombre Usuario: <input type="text" className="nUsuario" id="userInput"></input>
          Contrasenia: <input type="text" className="password" id="userInput"></input>


        </form></li>
        <li className="flex-item">4</li>
        <li className="flex-item">5</li>
        <li className="flex-item">6</li>
      </ul>
        </div>
      </div>
    );
  }
}
const Usr= gql`query {

  User(id:"592d167fe064591b8ec99dd1") {

    name
  }
}`;
const Usuario = graphql(Usr)(App);

export default Usuario;
