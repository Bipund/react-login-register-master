export const  login =(value) => (dispatch)=>{ 
    dispatch({type:"login",payload:value})
}
export const userDate=(value) => (dispatch)=>{ 
    dispatch({type:"userDate",payload:value})
}