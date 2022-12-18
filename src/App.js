import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Univer from './pages/UniverPage'
import MainPage from './pages/MainPage'

function App () {
  return (
      <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={'/univer'} element={<Univer/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </div>
      </BrowserRouter>
  )
}

export default App
