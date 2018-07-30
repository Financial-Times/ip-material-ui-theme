export default {
  root: {
    width: 176,
    backgroundColor: '#e9e9ea',
    borderBottom: '1px solid #A8AAAD',
    color: '#262A33', // Standard slate colour
    boxSizing: 'border-box',
    justifyContent: 'left',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize : 17,
    fontWeight: 500,
    padding: 19.5,
    '&$selected': {
      color: '#262A33',
      backgroundColor: '#e9e9ea',
    },
    '&:hover': {
      color: 'white',
      backgroundColor: '#262A33' // Standard slate colour
    },
    '&:last-child': {
      borderBottom: 'none'
    }
  }
}
