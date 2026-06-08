import React, { use } from 'react'
import NavBar from './navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { BASE_URL } from '../utils/constants';
import { addUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile-view", {}, {
        withCredentials: true
      });

      dispatch(addUser(res.data));

    } catch (err) {
      console.error("Error fetching user:", err);
      if (err.res?.status === 401) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    fetchUser();

  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body

