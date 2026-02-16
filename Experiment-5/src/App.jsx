
import React from 'react'
import './App.css'
import Home from './components/Home'
import HeavyComponent from './components/HeavyComponent'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const LazyLoadComponent = React.lazy(() => import('./components/HeavyComponent'))

function App() {

  return (
    <>  
      <Home />
      <HeavyComponent />
      
      <React.Suspense fallback="Loading...">
        <LazyLoadComponent /> 
      </React.Suspense>

      <React.Suspense fallback="Loading...">
        {/* Add delay here  */}
        <Dashboard />
      </React.Suspense>
    </>
  )
}

export default App
