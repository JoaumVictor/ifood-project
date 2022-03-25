const INITIAL_STATE = {
  email: 'bescoito08@gmail.com',
  password: 'senha123'
}

function loginData(state = INITIAL_STATE, { type, payload }) {
  switch(type) {
    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: payload,
      }
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        password: payload,
      }
    default: 
      return state;
  }
}

export default loginData;
