import React from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import Cookies from 'js-cookie';


function Dasboard() {
    const dispatch = useDispatch();
    const location = useLocation();
  
    const handleLogout = () => {
      Cookies.remove('accessToken');
      dispatch(logout());
      window.location.href = '/';
    };
  return (
    <>
        <h1>Dashboard</h1>
        <button onClick={handleLogout} >Logout</button>
    </>
  )
}

export default Dasboard