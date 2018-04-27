import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';

class AppBarExample extends Component {
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
      <div className="checkbox">
        <AppBar color="default" style={{position:'relative', marginBottom: '15px'}}>
          <Typography variant="title" color="inherit" >
              Title
          </Typography>
        </AppBar>
        <AppBar color="primary" style={{position:'relative', marginBottom: '15px'}}>
          <Typography variant="title" color="inherit" >
              Title
          </Typography>
        </AppBar>
        <AppBar color="secondary" style={{position:'relative', marginBottom: '15px'}}>
          <Typography variant="title" color="inherit" >
              Title
          </Typography>
        </AppBar>
      </div>
    );
  }
}

export default AppBarExample;
