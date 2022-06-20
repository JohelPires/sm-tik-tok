import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import './App.css'

function App() {
  return (
    <BrowserRouter className='App'>
      <h1>Nav</h1>
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
