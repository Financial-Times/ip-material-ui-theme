import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <Button>
          Root design
        </Button>
        <Button color="primary">
          Primary design
        </Button>
        <Button color="secondary">
          Secondary design
        </Button>
      </div>
    );
  }
}

export default Buttons;
