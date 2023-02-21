import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { greet } from './redux/greeting/greeting';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(greet());
    console.log('greeting', greeting);
  }, []);

  return (
    <div className="greeting">
      <h1 className="App-header">{greeting}</h1>
    </div>
  );
}

export default Greeting;
