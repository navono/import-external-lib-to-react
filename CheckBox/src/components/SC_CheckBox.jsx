import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";

export default class SC_CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };

    // this.dataChange = this.dataChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { rtInterface, tagName } = this.props;
    if (rtInterface) {
      rtInterface.open(this.dataChange);
      rtInterface.subscribe(new Array(tagName));
    }
  }

  render() {
    return (
      <Checkbox
        checked={this.state.checked}
        disabled={this.props.disabled}
        onChange={this.handleChange}
      >
        {this.props.title}
      </Checkbox>
    );
  }

  dataChange = (idx, value) => {
    this.setState({
      checked: value.v,
    });
  };

  handleChange() {
    const { rtInterface, tagName } = this.props;
    if (rtInterface) {
      const data = {
        n: tagName,
        v: !this.state.checked ? 1 : 0,
      };
      rtInterface.write(new Array(data));
    } else {
      this.setState({
        checked: !this.state.checked,
      });
    }
  }
}

SC_CheckBox.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  tagName: PropTypes.string,
  rtInterface: PropTypes.object,
};
