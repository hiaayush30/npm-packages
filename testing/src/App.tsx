import {sampleFunction} from 'aayush-demo';
import {Button,useCounter} from 'aayush-demo-package-2';
const App = () => {
  sampleFunction();
  const {count,decrement,increment} = useCounter();
  return (
    <div>
      Hello <Button>Click Me</Button>
      <div>
        {count}
        <button onClick={increment}>+</button> 
        <button onClick={decrement}>-</button> 
      </div>
    </div>
  )
}

export default App
