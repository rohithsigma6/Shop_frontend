import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProtectedPages from './components/protectedPages';
import Spinner from './components/Spinner';
import Profile from './pages/Profile/Profile';
import AddProduct from './pages/Products/AddProduct';
import MyProducts from './pages/Products/MyProducts';
import DisplayProduct from './pages/Products/DisplayProduct';
function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<ProtectedPages><Profile/></ProtectedPages>}/>
          <Route path='/product' element={<ProtectedPages><DisplayProduct/></ProtectedPages>}/>
          <Route path='/addproduct' element={<ProtectedPages><AddProduct/></ProtectedPages>}/>
          <Route path='/myproducts' element={<ProtectedPages><MyProducts/></ProtectedPages>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
