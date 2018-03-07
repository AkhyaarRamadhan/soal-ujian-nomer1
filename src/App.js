import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {user:''};
  }
  klik(){
    this.setState({user: this.refs.nama.value});
  }
  render() {
    return (
      <div fluid-container>

        <center>
          
  <h3>Halo!</h3>
  <fieldset>
<label>Name</label>
<br></br>
 <input ref="nama"type="text"/>
 <br></br>
 <button onClick={()=>{this.klik();}}>submit</button>
      </fieldset>
      <br></br>
      <fieldset>
  <h1> {this.state.user} </h1>
       </fieldset>
      </center>

      </div>
    );
  }
}

export default App;
