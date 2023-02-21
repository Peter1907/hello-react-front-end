import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { greet } from './redux/greeting/greeting';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(greet());
    // this line is required to run uesEffect once without any dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="greeting">
      <h1 className="App-header">{greeting}</h1>
    </div>
  );
}

export default Greeting;
