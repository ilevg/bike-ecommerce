import { BrowserRouter } from 'react-router-dom';
import { ActiveAuthComponentProvider, ListproductsProvider, SingleProductProvider, ActiveProfileTabProvider, ListBlogPostProvider } from './context'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppWrapper from './components/AppWrapper';
// import AppRouter from './components/AppRouter';
import './styles/index.scss'

function App() {
  return (
    <ActiveAuthComponentProvider>
      <ActiveProfileTabProvider>
        <ListBlogPostProvider>
          <ListproductsProvider>
            <SingleProductProvider>

              <BrowserRouter>
                <Header />
                <AppWrapper />
                <Footer />
              </BrowserRouter>

            </SingleProductProvider>
          </ListproductsProvider>
        </ListBlogPostProvider>
      </ActiveProfileTabProvider>
    </ActiveAuthComponentProvider>
  );
}

export default App;
