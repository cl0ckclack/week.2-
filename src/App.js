import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cal from './Com/Cal';


class App extends Component {
  constructor(){
    super();
    this.state={name1:0 ,name2:0, name3:0};
  }
  render() {
    
    const myname ="THunDER";
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div> 
       <Cal />
      </div>
      </div>

      
     
    );
  }
}

export default App;
