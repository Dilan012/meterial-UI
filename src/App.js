import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login/Login';
import PrivateRoute from './Auth/PrivateRoute';
import { Home } from './pages/home/Home';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path='/dashbord/*' element={<Home/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
