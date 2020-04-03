import React, { useState } from 'react';
import Hello from './Hello';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <Hello increment={() => setCount(count + 1)} />

      <div>{count}</div>
    </div>
    
  );
}

export default App;
