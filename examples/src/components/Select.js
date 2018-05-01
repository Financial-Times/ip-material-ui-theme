import React, { Component } from 'react';
import MaterialSelect from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

class SelectExample extends Component {
  render() {
    const menuItems = [1,2,3,4].map((item) => {
      const name = `Menu Item ${item}`
      return (
        <MenuItem
          key={`${item}`}
          value={name}
        >
          {name}
        </MenuItem>
      )
    })

    return (
      <div className="select">
        <FormControl>
        <InputLabel>Select Status</InputLabel>
          <MaterialSelect
            aria-label="status"
            name="status"
            value="Menu Item 1"
          >
            {menuItems}
          </MaterialSelect>
        </FormControl>
      </div>
    );
  }
}

export default SelectExample;
