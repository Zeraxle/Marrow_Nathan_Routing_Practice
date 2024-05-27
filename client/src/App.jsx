import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import WordColor from './components/WordColor'

function App() {
  

  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/number/:number' element={<Number/>}/>
        <Route path='/word/:word' element={<Word/>}/>
        <Route path='/word/:word/:color/:background' element={<WordColor/>}/>
      </Routes>
    </>
  )
}

export default App
