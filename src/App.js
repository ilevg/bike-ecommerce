import './styles/index.scss'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
