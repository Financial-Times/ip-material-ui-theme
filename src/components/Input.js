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
      padding: '25px 6px 7px 6px',
      '&$focused': {
        padding: '24px 5px 6px 5px',
        border: '1px solid #00EAFF'
      }
    },
    underline: {
      '&:after': {
        height: 0
      },
      '&$focused:after': {
        transform: 'scaleX(0)'
      },
      '&:hover:not($disabled):before': {
        height: 0
      },
      '&:before': {
        height: 0
      }
    }
}
