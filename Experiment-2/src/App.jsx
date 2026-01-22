import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveApp from './components/Responsive.jsx'
import ThemeSwitchApp from './components/ThemeSwitch.jsx' 
import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'

import ButtonBasic from './components/Button.jsx'

function App() {
  

  return (
    <>
      <ButtonBasic />

      
      <Home></Home>
      {/* <ResponsiveApp /> */}
      {/* <ThemeSwitchApp /> */}

    </>
  )
}

export default App
