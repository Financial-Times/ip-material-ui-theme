export default {
  bar : {
    border: '1px solid rgba(13,118,128,1)',
    backgroundColor: 'white',
    opacity: 1
  },
  icon : {
    border: '1px solid #0D7680',
    backgroundColor: '#FFFFFF'
  },
  iconChecked: {
    backgroundColor: '#0D7680'
  },
  checked: {
    '& + $bar': {
      backgroundColor: 'rgba(13,118,128,1)'
    },
  },
  colorPrimary: {
    '& + $bar': {
      borderColor: 'rgba(37,40,48, 1)',
    },
    '& $icon': {
      borderColor: 'rgba(37,40,48, 1)',
    },
    '&$checked': {
      color: 'rgba(37,40,48, 1)',
      '& + $bar': {
        backgroundColor: 'rgba(37,40,48, 1)',
      },
      '& $icon': {
        backgroundColor: 'rgba(37,40,48, 1)',
      },
    },
  },
  colorSecondary: {
    '& + $bar': {
      borderColor: 'rgba(37,40,48, 1)',
    },
    '& $icon': {
      borderColor: 'rgba(37,40,48, 1)',
      backgroundColor: 'rgba(37,40,48, 1)'
    },
    '&$checked': {
      color: 'rgba(37,40,48, 1)',
      '& + $bar': {
        backgroundColor: 'rgba(37,40,48, 1)',
      },
      '& $icon': {
        backgroundColor: 'rgba(37,40,48, 1)',
      },
    },
  },
  disabled: {
    '& + $bar': {
      opacity: 0.1,
    },
    '& $icon': {
      opacity: 0.7,
    },
  }
}
