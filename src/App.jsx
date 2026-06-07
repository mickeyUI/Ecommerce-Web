import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { ContextProvider } from './components/Context';
function App() {
  return <ContextProvider>
    <Home/>
  </ContextProvider>
}

export default App;
