
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import Itemlistcontainer from './components/itemlistcontainer/itemlistcontainer';
import Itemdetailcontainer from './components/itemdetailcontainer/itemdetailcontainer';
function App() {
  return (
    
    <div className="App">
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Itemlistcontainer greeting={'bienvenido al ecomerce'}/>}/>
  <Route path='/category/:categoryId' element={<Itemlistcontainer/>}/>
  <Route path='/item/:productId' element={<Itemdetailcontainer/>}/>
  </Routes>
  

  </BrowserRouter>
    </div>
  );
}

export default App;
