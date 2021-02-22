import { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increace count</button>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
