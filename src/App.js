import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { QuienesSomos } from './pages/QuienesSomos';
import { Hotel } from './pages/Hotel';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/quienesSomos' element={<QuienesSomos/>}></Route>
      <Route path='/hotel' element={<Hotel/>}></Route> 
    </Routes>
    </>
  );
}

export default App;
