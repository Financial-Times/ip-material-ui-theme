import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

class CheckboxExample extends Component {
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
      <div className="buttons">
        <Checkbox
          checked={this.state.checked}
          value="checkedA"
          onChange={this.handleChange}
        />
        <Checkbox
          checked={this.state.checked}
          value="checkedB"
          color="primary"
          onChange={this.handleChange}
        />
        <Checkbox
          checked={this.state.checked}
          value="checkedC"
          color="secondary"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CheckboxExample;
