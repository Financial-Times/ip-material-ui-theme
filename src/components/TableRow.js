export default {
  root: {
    '& tbody tr:nth-child(even)': {
      backgroundColor: '#FFFFFF'
    },
    '& tbody tr:nth-child(odd)': {
      backgroundColor: '#EEEEEE'
    },
    '& tbody tr': {
      '&:hover': {
        backgroundColor: '#CCCCCC!important'
      },
    },
  }
}
