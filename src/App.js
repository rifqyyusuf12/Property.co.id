import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Property from './Components/Pages/Property';
import Transaction from './Components/Pages/Transaction';
import Account from './Components/Pages/Account';
import NavBar from './Components/Pages/navbar';
import Login from './Components/Pages/Login';
import { Box } from 'native-base';
import Footer from './Components/AppComponents/footer';
import Forget from './Components/Pages/welcome/forget';
import Signup from './Components/Pages/welcome/signupForm';

function App() {
  return (
    <>  
      <Box>
        <NavBar />
      </Box>
      <Box >

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/property" element={<Property />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/account" element={<Account/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/forget" element={<Forget />} />
            <Route path="/login/signup" element={<Signup />} />
        </Routes>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
