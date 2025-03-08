import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import { HomePage } from './pages/home/HomePage';

function App(){
  return <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  </>
}

export default App;