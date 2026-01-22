import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import CounterContextProvider from './components/context/CounterGlobalContextAPI.jsx'

import { Provider } from "react-redux";
import { store } from "./store/Store.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterContextProvider>
      <App />
    </CounterContextProvider> */}
  
     <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
  
  ,
)
