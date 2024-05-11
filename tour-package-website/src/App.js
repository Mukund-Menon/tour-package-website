import HomePage from './home';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login/login';
import Signup from './login/registration'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='login/' element={<Login/>} />
          <Route path='signup/' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
