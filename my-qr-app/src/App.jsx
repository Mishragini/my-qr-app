import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemForm from './components/AddItem';
import QRScanner from './components/QrScanner';
import { Landing } from './components/Landing';
import './App.css'

function App() {


  return (
    <>
 <Router>
    <Routes>
        <Route path="/" element={<Landing/>} />

        <Route path="/addItem" element={<ItemForm/>} />
        <Route path="/scanner" element={<QRScanner/>} />
      </Routes>
  </Router>
    </>
   
  )
}

export default App
