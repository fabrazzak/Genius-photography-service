import logo from './logo.svg';
import './App.css';
import Header from './Pages/Share/Header/Header';
import Footer from './Pages/Share/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/LogIn/Login/Login';
import Signin from './Pages/LogIn/Signin/Signin';
import CheckOut from './Pages/LogIn/CheckOut/CheckOut';
import FourOFour from './Pages/FoutOFour/FourOFour';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Proceed from './Pages/LogIn/Proceed/Proceed';
import ForgetPassword from './Pages/LogIn/ForgetPassword/ForgetPassword';

function App() {
  
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        <Route path='services/:servicesId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='services/services/:servicesId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='proceed' element={<Proceed></Proceed>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signin' element={<Signin></Signin>}></Route>
        <Route path='resetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='*' element={<FourOFour></FourOFour>}></Route>

       
      </Routes>
      <Footer></Footer>     
     
    </>
  );
}

export default App;
