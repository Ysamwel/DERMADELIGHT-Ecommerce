import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BannerProduct from './components/BannerProduct';

function App() {
  return (
    <>
      <Footer/>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;
