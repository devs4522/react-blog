import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async (dispatch) => {
    
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response})
    
    }
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