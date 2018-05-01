import React, { Component } from 'react';
import Radio from 'material-ui/Radio';

class RadioExample extends Component {
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
      <div className="radio">
        <Radio
          checked={this.state.checked}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="A"
        />
        <Radio
          checked={this.state.checked}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="A"
          color="primary"
        />
        <Radio
          checked={this.state.checked}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="A"
          color="secondary"
        />
      </div>
    );
  }
}

export default RadioExample;
