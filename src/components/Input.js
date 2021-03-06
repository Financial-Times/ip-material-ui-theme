export default {
  formControl: {
    'label + &': {
      marginTop: '0px'
    }
  },
  multiline : {
    padding: '25px 6px 7px 6px'
  },
  root: {
    marginTop: '0',
    padding: '25px 6px 7px 6px'
  },
  'input' : {
    border: '1px solid #A8AAAD',
    '&:focus': {
      border: '1px solid #00EAFF'
    },
  },
  underline: {
    '&:before': {
      borderBottom: 'none'
    },
    '&:after': {
      borderBottom: 'none'
    },
    '&$focused:after': {
      transform: 'scaleX(0)'
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
      borderBottom: 'none'
    },
    '&:before': {
      borderBottom: 'none'
    }
  }
}
