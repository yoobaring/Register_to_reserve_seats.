import logo from './logo.svg';
import './App.css';
import './index.css';
import SignUp from './screen/Signup';
import Admin from './screen/Admin';
import RequireAuth from './screen/RequireAuth';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './screen/Dashboard';
import RegisList from './screen/RegisList';
import Signin from './screen/Signin';
import { setAllusers } from './app/api/usersSlice';
import { mockUsers } from './mock';
import { useDispatch } from 'react-redux';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch()
  dispatch(setAllusers([...mockUsers]))
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="list" element={<RegisList />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="admin" element={<Admin />} />
          {/* <Route path="dashboard" element={<Admin />} /> */}
          {/* <Route path="detail" element={<Details />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
