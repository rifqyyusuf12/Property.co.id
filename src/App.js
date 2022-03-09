import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Property from './Components/Pages/Property';
import Chat from './Components/Pages/Chat';
import Transaction from './Components/Pages/Transaction';
import Account from './Components/Pages/Account';
import NavBar from './Components/Pages/navbar';
import LoginForm from './Components/Pages/Login';
import { Box } from 'native-base';

function App() {
  return (
    <>  
      <Box position="relative">
        <NavBar />

      </Box>
      <Box position="relative" >
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/property" element={<Property />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/account" element={<Account/>} />
            <Route path="/login" element={<LoginForm/>} />
        </Routes>

      </Box>
    </>
  );
}

export default App;
