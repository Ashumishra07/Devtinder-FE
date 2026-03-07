import React from 'react'
import EditProfile from './EditProfile'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useSelector } from 'react-redux';

const Profile = () => {
  
  
  const user = useSelector((store) => store.user);
  return (
    user && (<div>
      <EditProfile user={user} />
    </div>)
  )
} 

export default Profile