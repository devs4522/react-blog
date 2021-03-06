import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
    
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    
    
} 

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data})
}




// function createThunkMiddleware(extraArgument) {
//     return ({ dispatch, getState }) => {
//         return  (next) => {
//             return (action) => {
//                 if (typeof action === 'function') {
//                     return action(dispatch, getState, extraArgument);
//                 }
            
//                 return next(action);
//             };

//         }
//     }

//   }
  
//   const thunk = createThunkMiddleware();
//   thunk.withExtraArgument = createThunkMiddleware;
  
//   export default thunk;