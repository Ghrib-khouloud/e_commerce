
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from'./components/assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}></Route> 
      <Route path='/men' element={<Shopcategory banner={men_banner} category="men"/>}></Route> 
      <Route path='/women' element={<Shopcategory banner={women_banner} category="women"/>}></Route> 
      <Route path='/kids' element={<Shopcategory banner={kids_banner}  category="kid"/>}></Route>    
      <Route path='/product' element={<Product/>}>
      <Route path=':productid' element={<Product/>}/>
      </Route>  
      <Route path='/cart' element={<Cart/>}></Route> 
      <Route path='/login' element={<LoginSignup/>}></Route> 
      </Routes> 
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
