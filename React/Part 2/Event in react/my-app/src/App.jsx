import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function DoSomething(){
  console.log("Hello!")
}
function DoSomething2(){
  console.log("bye!")
}
function DoSomething3(){
  console.log("bye bye!")
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className="m-2">
        <button onClick={DoSomething}>Click me!</button>
        <p onMouseOver={DoSomething2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique dolores sunt! Quo similique dolore quos error quidem natus odio quaerat, minus optio, vel commodi.</p>
        <button onDoubleClick={DoSomething3}>Double click me!</button>
    </div>
      {/* <div>
        <h2 className='text-amber-300'>Vikram Aditya</h2>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
