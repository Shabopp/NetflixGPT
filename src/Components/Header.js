import React from 'react';
import NetflixLogo from './Netflix_Logo_PMS.png';
import {  signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate} from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react';
const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  
  const handleSignOut = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      navigate("/error");
    });
  };
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
        
          const {uid,email,displayName,photoURL}=user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
        } else {
          
        dispatch(removeUser());
        navigate("/");
        
        }
    });
    return ()=> unsubscribe(); 

},[]);
  return(
  <div >
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-full flex justify-between">
      <img src={NetflixLogo} alt="Netflix Logo" 
      className='w-44'  />
      
      {user && (
          <div className='flex p-2'>
          <img alt="user-icon" className='w-12 h-12' src={user.photoURL}/>
          <button onClick={handleSignOut} className="h-15 w-30 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Sign Out</button>
          </div>
      )
      }
      </div>
  </div>

  );
};

export default Header;