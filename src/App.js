
import './App.css';
import Contact from './partials/Contact';
import Footer from './partials/Footer';
import InfrastructureIndex from './partials/Infrastructure/InfrastructureIndex';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Home from './partials/Section/Home';
import AboutIndex from './partials/About/AboutIndex';
import SustainabilityIndex from './partials/Sustainability/SustainabilityIndex';
import ProductsIndex from './partials/Products/ProductsIndex';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutIndex/>}></Route>
          <Route path='/infrastructure' element={<InfrastructureIndex/>}></Route>
          <Route path='/sustainability' element={<SustainabilityIndex/>}></Route>
          <Route path='/product' element={<ProductsIndex/>}></Route>
        </Routes>
      </Router>
      <Contact/>
      <Footer/>

      
    </div>
  );
}

export default App;
