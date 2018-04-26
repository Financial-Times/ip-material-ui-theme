import React, { Component } from 'react';
import Switch from 'material-ui/Switch';

class SwitchExample extends Component {
  constructor(props) {
  super(props);
    this.state = {
      checked: false
    }
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <div className="switch">
        <Switch checked={this.state.checked}
          onChange={this.handleChange}
        />
        <Switch disabled
          checked={true}
        />
      </div>
    );
  }
}

export default SwitchExample;
