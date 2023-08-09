
import './App.css';
import DashBoard from './Pages/Admin/DashBoard';
import Login from './Pages/Admin/Login';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './Pages/Admin/Navbar';
function App() {
  console.log(localStorage.auth!==null)
  return (
    <div>
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        {localStorage.auth !== null && localStorage.auth !== undefined ? 
        
        
        <><Route path="/dashboard" element={<DashBoard />} /> <Route path="/navbar" element={<Navbar />} /></>
        
        :  <Route path="*" element={<Navigate replace to="/login" />} />}
       
        <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
