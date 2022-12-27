
import './App.css';
import Navbar from './components/navbar/navbar'
import Itemlistcontainer from './components/itemlistcontainer/itemlistcontainer';
function App() {
  return (
    
    <div className="App">
  <Navbar/>

  <Itemlistcontainer greeting='bienvenido al ecomerce'/>

    </div>
  );
}

export default App;
