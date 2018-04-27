import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <Button style={{marginLeft:'5px'}}>
          Root design
        </Button>
        <Button color="primary"
          style={{marginLeft:'5px'}}
        >
          Primary design
        </Button>
        <Button color="secondary"
          style={{marginLeft:'5px'}}
        >
          Secondary design
        </Button>
      </div>
    );
  }
}

export default Buttons;
