export default {
  root: {
    width: 176,
    backgroundColor: 'rgba(37,40,48, 1)',
    borderBottom: '1px solid #FFFFFF',
    color: '#FFFFFF',
    boxSizing: 'border-box',
    justifyContent: 'left',
    paddingLeft: 5,
    paddingRight: 5,
    padding: 22,
    '&$selected': {
      backgroundColor: 'rgba(37,40,48,.8)'
    },
    '&:hover': {
      backgroundColor: 'rgba(37,40,48,.8)'
    },
    '&:last-child': {
      borderBottom: 'none'
    }
  }
}
