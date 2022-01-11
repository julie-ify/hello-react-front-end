import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, getMessagesSuccess } from '../redux/messages';

const Greeting = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messagesReducer);

  const handleMessages = async () => {
    const data = await getMessages();
    if (data) {
      dispatch(getMessagesSuccess(data));
    }
  };

  return (
    <div className="container">
      <p>Please click the button below to get a greeting</p>
      <ul>
        {messages.greetings
          && messages.greetings.map((greet) => (
            <li key={greet.created_at}>
              Greeting:
              {greet.greeting}
            </li>
          ))}
      </ul>
      <button onClick={handleMessages} type="button">
        Get greeting
      </button>
      <br />
    </div>
  );
};
export default Greeting;
