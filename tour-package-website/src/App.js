import HomePage from './home';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login/login.jsx';
import Signup from './login/registration'
import Search from './search/search';
import Booking from './booking2/booking2.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='login/' element={<Login/>} />
          <Route path='signup/' element={<Signup/>} />
          <Route path='search/' element={<Search/>} />
          <Route path='booking/' element={<Booking/>} />


        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
