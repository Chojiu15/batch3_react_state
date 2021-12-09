import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {


    console.log('hello world')



  }, [count])

  

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  
  
  return (
    <div className="App">
      <button onClick={decrement}>
      -1
      </button>
      {count}
      <button onClick={increment}>
        +1
      </button>
    </div>
  );
}

export default App;




