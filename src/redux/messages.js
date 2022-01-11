const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

const initialState = {
  greetings: [],
};

export const getMessages = async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/messages');
  const result = await response.json();
  return result;
};

export const getMessagesSuccess = (payload) => ({
  type: GET_MESSAGES_SUCCESS,
  payload,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGES_SUCCESS':
      return {
        ...state,
        greetings: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
