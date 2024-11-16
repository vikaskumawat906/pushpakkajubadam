import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from '../src/Components/Navbar'
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DryFruitsAndNuts from './Components/DryFruitsAndNuts';
import Products from './Components/Products';
import About from './Components/About';
import Category from './Components/Category';
import StickyBox from './Components/StickyBox';
function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dryfruitsandnuts" element={<DryFruitsAndNuts/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/category/:category" element={<Category />} />
        </Routes>
        <Footer/>
        <StickyBox/>
        </Router>
    </>
  );
}

export default App;
