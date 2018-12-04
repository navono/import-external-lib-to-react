import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import * as loadjs from 'loadjs';

interface IState {
  checkBox: any;
  logControl: any;
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      checkBox: null,
      logControl: null,
    };
  }

  public render() {
    const { checkBox, logControl } = this.state;
    const checkBoxEnable = checkBox !== null;
    const logControlEnable = logControl !== null;


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
        <input type='button' value="load LogControl" onClick={this.handleLogControl} />
        <div id="checkBox"/>
        {checkBoxEnable && <this.state.checkBox/>}
        {logControlEnable && <this.state.logControl/>}
      </div>
    );
  }

  private handleLoadCheckBox = (e: any) => {
    // 如果想要传入变量名到 import，应该首先指定好模块所在的目录（其实就是 webpack 的查找路径），然后再用模块名称拼接。
    // 如果将整个模块路径保存到变量中传入 import，webpack会提示找不到模块
    // https://segmentfault.com/a/1190000015648036

    const fileName = 'CheckBox';
    const libPath = `../../lib/${fileName}/index.js`;
    const modName = 'AwesomeComponent';

    if (!loadjs.isDefined(modName)) {
      loadjs([libPath], modName, {
        success: () => {
          this.setState({
            checkBox: (window as any)[modName].default
          });
          console.log('load js ', (window as any)[modName].Config);
        },
      });
    }
  }

  private handleLogControl = (e: any) => {
    const fileName = 'LogControl';
    const libPath = `../../lib/${fileName}/index.js`;
    const modName = 'LogControl';

    if (!loadjs.isDefined(modName)) {
      loadjs([libPath], modName, {
        success: () => {
          console.log('load js ', (window as any)[modName].Config);
          console.log((window as any)[modName].default);
          
          this.setState({
            logControl: (window as any)[modName].default
          });
        },
      });
    }
  }
}

export default App;
