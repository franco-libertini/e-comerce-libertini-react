
import './App.css';
import { BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar/Navbar'
import { CartProvider } from './context/CartContext'

import { NotificationProvider } from './notification/NotificationService';


function App() {
  return (
    
    <div className="App">
        <NotificationProvider>
        <CartProvider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
        </CartProvider>
        </NotificationProvider>
    </div>
  );
}

export default App;
