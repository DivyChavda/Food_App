import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import { Provider } from 'react-redux'
import Store from './redux/Store'


function App() {

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/success' element={<Success />}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
