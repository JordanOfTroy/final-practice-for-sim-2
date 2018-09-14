const initialState = {
  userName: '',
  password: '',
  favColor: ''
}

/****************************************************** */

const GET_USER_INFO = 'GET_USER_INFO',
      UPDATE_USER_NAME = 'UPDATE_USER_NAME',
      UPDATE_PASSWORD = "UPDATE_PASSWORD"



/****************************************************** */

 export function userNameInput (name) {
  return {
    type: UPDATE_USER_NAME,
    payload: name
    
  }
 }

 export function passwordInput (password) {
  return {
    type: UPDATE_PASSWORD,
    payload: password
   
  }
 }


/****************************************************** */

export default function reducer (state=initialState, action) {
  switch (action.type) {

    case UPDATE_PASSWORD:
      return Object.assign({}, state, {password: action.payload})


    case UPDATE_USER_NAME:
      return Object.assign({}, state, {userName: action.payload})
      

    default:
      return state
  }
}