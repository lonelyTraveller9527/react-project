const defaultState = {
  message: 'message',
  arrInfo: [1,2,3]
}

const reduce = (state = defaultState, action) => {
  if(action.type === 'change'){
    return {
      ...state,
      message: action.value
    }
  }
  if(action.type === 'actionChange'){
    return {
      ...state,
      arrInfo: action.value
    }
  }
  return state
}

export default reduce