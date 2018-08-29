// import CheckBox from "./SC_CheckBox";

// export { CheckBox };

import React from "react";
import ReactDOM from "react-dom";
import SC_CheckBox from "./SC_CheckBox";

// 导出类，按照要求修改
class CheckBox {
  constructor(params) {
    this.params = params;
  }

  render() {
    const { id, title, tagName, rtInterface } = this.params;

    return ReactDOM.render(
      <div>
        <SC_CheckBox
          title={title}
          tagName={tagName}
          rtInterface={rtInterface}
        />
      </div>,
      document.getElementById(id),
    );
  }
}

export { CheckBox };
