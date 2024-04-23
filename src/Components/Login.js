import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import  {auth}  from '../utils/firebase';
import { AVATAR } from '../utils/constants';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const[isSignedIn,setisSignedIN] =useState(false);
    const [errorMsg,seterrorMsg] = useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
   
    const dispatch= useDispatch();
    function ToggleHandler(){
     
        setisSignedIN(!isSignedIn);
    }

   const HandleClick=()=>{
        const message=checkValidData(email.current.value,password.current.value);
        seterrorMsg(message);

        if(message)return;

        if(!isSignedIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              
              const user = userCredential.user;
              updateProfile(user, {
                displayName:name.current.value, 
                photoURL:{AVATAR}
                
              }).then(() => {
                const {uid,email,displayName,photoURL}=auth.currentUser;
              //  console.log("DISPLAY NAME:", displayName);
              dispatch(
                addUser({
                  uid:uid,
                  email:email,
                  displayName:displayName,
                  photoURL:photoURL
                })
                );
              
             
              }).catch((error) => {
               

               seterrorMsg (error.message);
              });
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMsg(errorCode + errorMessage);
              // ..
            }); 

        }else
        {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
   const user = userCredential.user;
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMsg(errorCode + errorMessage);
  });

        }

    };
  return (
    <div>
        <Header/>
        <div className='absolute '>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='body' />
        </div>
        
        
        <form onSubmit={(e)=>e.preventDefault()} className='absolute w-4/12 p-12 bg-[#070405] my-36 mx-auto right-0 left-0 text-white z-10 opacity-90'>
        <h1 className="text-3xl  py-4">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
        { !isSignedIn && ( <input type='text' 
        ref={name}
        placeholder='UserName' 
        className='p-4 my-4 w-full bg-[#333333] border-none outline-none text-white rounded'/>)}
        <input  type='text' 
        ref={email}
        placeholder='Email Address' 
        className='p-4 my-4 w-full bg-[#333333] border-none outline-none text-white rounded'/>
        <input type='password' 
        placeholder='password'
        ref={password}
        className='p-4 my-4 w-full bg-[#333333]  border-none outline-none text-white rounded'/>
        <p className='text-red-700 font-bold'> {errorMsg}</p>
        <button 
        className='p-4 my-6
        bg-[#E50914] text-white py-4 rounded hover:bg-red-900 transition duration-300 w-full' onClick={HandleClick}>
            Sign In
        </button>
      
      <p className='py-4 cursor-pointer text-[#3F6573]' onClick={ToggleHandler}>{isSignedIn ? "New to Netflix? Sign Up Now"
: " Already a user? SignIN NOW" }</p>
      
     
        </form>

    </div>
  )
}

export default Login 

