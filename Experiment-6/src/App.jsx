import { useState } from 'react'
import './App.css'
import Form from './components/Form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Experiment 6: To demonstrate Form Handling and Validation</h2>
      <Form />
    </>
  )
}

export default App
