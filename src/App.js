import './App.css';
import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/SignUp';
import SignIn from './Pages/SignIn/SignIn';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route
            path='/signup' element={<Signup />}
          />

          <Route
            path='/signin' element={<SignIn />}
          />
          
          <Route
            path='/' element={<Home />}
          />

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
