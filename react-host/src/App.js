import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type='button' value="load Checkbox" onClick={this.handleLoadCheckBox} />
        <div id="checkBox"/>
      </div>
    );
  }

  handleLoadCheckBox = (e) => {
    import("../../lib/CheckBox")
      .then((CheckBoxNS) => {
          console.log('custom: ', CheckBoxNS);
          const checkBox = new CheckBoxNS.CheckBox({id: "checkBox", title: "Test title"});
          checkBox.render();
      })
      .catch((err) => {
          console.log("Failed to load CheckBox", err);
      });
  }
}

export default App;
