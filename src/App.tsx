import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import { HomePage } from './pages/home/HomePage';
import { routes } from './routes';

function App(){
  return <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            {routes}
          </Route>
        </Routes>
    </BrowserRouter>
  </>
}

export default App;