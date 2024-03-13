import './styles/index.scss'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import {ListproductsContext, ListproductsProvider} from './context/index'
const initialProducts = []; // начальное значение контекста

function App() {
  return (
    <ListproductsProvider>
      <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
    </ListproductsProvider>
    
  );
}

export default App;
