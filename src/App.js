import React, {Component, useState, useEffect} from 'react';

const App = () => {
const [count, setCount]=useState(0);

useEffect (()=>{
  document.title=`clicked ${count} times`
});

const increment =() =>{
  setCount(count +1)
};

  return (
    <div>
      <h2>Counter_App</h2>
      <p>Using useffect as lifecycle method for document title update</p>
      <button id="buttons" onClick={increment}>clicked {count} times</button>
    </div>
  );
}

export default App;
