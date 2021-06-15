export const asyncAction1 = (value)=>{
  return (dispatch)=>{
    setTimeout(() => {
      dispatch({type: 'actionChange', value})
    }, 2000);
  }
}