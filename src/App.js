import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';
import MovieDetail from './Components/MovieDetail';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={  <Login />  }/>
    <Route path="/moviedetail" element={<MovieDetail />}/>
    <Route path="/login" element={<Login />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
