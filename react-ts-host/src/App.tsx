import * as React from 'react';
import * as path from 'path';
import './App.css';
import logo from './logo.svg';
import * as loadjs from 'loadjs';

interface IState {
  customComponent: any;
}

class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      customComponent: null,
    };
  }

  public render() {
    const { customComponent } = this.state;
    const enable = customComponent !== null;
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
        {enable && <this.state.customComponent/>}
      </div>
    );
  }

  private handleLoadCheckBox = (e: any) => {
    // 如果想要传入变量名到 import，应该首先指定好模块所在的目录（其实就是 webpack 的查找路径），然后再用模块名称拼接。
    // 如果将整个模块路径保存到变量中传入 import，webpack会提示找不到模块
    // https://segmentfault.com/a/1190000015648036

    const fileName = 'TestName';
    const modName = 'AwesomeComponent'
    // import('../../lib/' + modName)
    
    console.log(__dirname, process.cwd());
    console.log(path.resolve(__dirname, '../../'));
    // const basic = `../../`;
    
    console.log('prepare to load component');
    
    loadjs([`../../lib/${fileName}/index.js`], modName, {
      success: () => {
        this.setState({
          customComponent: (window as any)[modName].default
        });
        console.log('load js ', (window as any)[modName].Config);
      },
    });

    // import(`${basic}lib/` + modName)
    //   .then((CheckBoxNS) => {
    //       const checkBox = new CheckBoxNS.CheckBox({id: "checkBox", title: "Test title"});
    //       checkBox.render();
    //   })
    //   .catch((err) => {
    //     // tslint:disable-next-line no-console
    //     console.log("Failed to load CheckBox", err);
    //   });
  }
}

export default App;
