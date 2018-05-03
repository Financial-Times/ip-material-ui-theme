export default {
  root: {
    border: `1px solid #0D7680`,
    borderRadius: `0px`,
    color: '#0D7680',
    backgroundColor: '#FFFFFF',
    padding: '5px 5px',
    textTransform: 'none',
    '&$disabled': {
      border: `1px solid rgba(13,118,128,.4)`,
      color: `rgba(13,118,128,.4)`
    },
    '&:hover': {
      backgroundColor: 'rgba(13,118,128,.1)'
    },
    '&:active': {
      background: `rgba(13,118,128,1)`,
      color: `white`
    }
  },
  flatPrimary: {
    border: '1px solid rgba(13,118,128,1)',
    color: '#FFFFFF',
    backgroundColor: 'rgba(13,118,128,1)',
    '&$disabled': {
      border: '1px solid rgba(13,118,128,.4)',
      color: 'rgba(13,118,128,.4)'
    },
    '&:hover': {
      color: 'rgba(13,118,128,1)',
      backgroundColor: 'rgba(13,118,128,.1)'
    },
    '&:active': {
      background: 'rgba(13,118,128,1)',
      color: 'white'
    }
  },
  flatSecondary: {
    border: `1px solid rgb(38,42,51)`,
    color: 'rgb(38,42,51)',
    backgroundColor: '#FFFFFF',
    '&$disabled': {
      border: `1px solid rgba(38,42,51,.4)`,
      color: `rgba(38,42,51,.4)`
    },
    '&:hover': {
      backgroundColor: 'rgba(38,42,51,.1)'
    },
    '&:active': {
      background: `rgba(38,42,51,1)`,
      color: `white`
    }
  }
}
