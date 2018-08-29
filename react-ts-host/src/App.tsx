import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input type='button' value="load Checkbox" onClick={this.handleLoadCheckBox} />
        <div id="checkBox"/>
      </div>
    );
  }

  private handleLoadCheckBox = (e: any) => {
    import("../../lib/CheckBox")
      .then((CheckBoxNS) => {
          const checkBox = new CheckBoxNS.CheckBox({id: "checkBox", title: "Test title"});
          checkBox.render();
      })
      .catch((err) => {
        // tslint:disable-next-line no-console
        console.log("Failed to load CheckBox", err);
      });
  }
}

export default App;
