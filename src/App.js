
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import AppRouter from './routes/routes';
import Navbar from './components/navbar/navbar'
import { CartProvider } from './context/cartcontext'



function App() {
  return (
    
    <div className="App">
 
        <BrowserRouter>
        <CartProvider>
          <Navbar />
          <AppRouter />
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
