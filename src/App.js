import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter className='App'>
      <Header />
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
