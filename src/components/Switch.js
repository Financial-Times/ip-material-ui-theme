export default {
  bar : {
    border: `1px solid rgba(13,118,128,1)`,
    backgroundColor: 'white',
    opacity: 1
  },
  icon : {
    border: `1px solid #0D7680`,
    backgroundColor: '#FFFFFF'
  },
  iconChecked: {
    backgroundColor: '#0D7680'
  },
  checked: {
    '& + $bar': {
      border: `1px solid rgba(13,118,128,1)`,
      backgroundColor: 'rgba(13,118,128,.38)',
      opacity: 1
    }
  },
  checkedPrimary: {
    '& + $bar': {
      border: `1px solid rgba(13,118,128,1)`,
      backgroundColor: 'rgba(13,118,128,.38)',
      opacity: 1
    }
  },
  checkedSecondary: {
    '& + $bar': {
      border: `1px solid rgba(13,118,128,1)`,
      backgroundColor: 'rgba(13,118,128,.38)',
      opacity: 1
    }
  }
}
