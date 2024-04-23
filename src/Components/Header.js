import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { FaCaretDown } from 'react-icons/fa';
import NetflixLogo from './Netflix_Logo_PMS.png';
import ChatGPTLogo from './chatgptlogo.jpeg';
import UserIcon from './user1.png';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch= useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };
  const HandleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange=(e)=>{
      dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-full flex justify-between">
        <img src={NetflixLogo} alt="Netflix Logo" className="w-44" />

        {user && (
          <div className="flex p-2">
           
            {showGptSearch && 
             <select className='p-2 m-2 bg-gray-900 text-white  ' onChange={handleLanguageChange}>
             {SUPPORTED_LANGUAGES.map((lang)=>(
               <option key={lang.identifier} value={lang.identifier}>
                 {lang.name}
               </option>
             ))}
             
            </select>}
        <button 
    onClick={HandleGptSearchClick}    
  type="button"
  className="text-white hover:text-white border border-[] hover:bg-[your-hover-color] focus:ring-4 focus:outline-none focus:ring-[your-focus-color] font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2 dark:border-[your-dark-border-color] dark:text-[your-dark-text-color] dark:hover:text-white dark:hover:bg-[your-dark-hover-color] dark:focus:ring-[your-dark-focus-color] flex items-center transition-transform transform hover:scale-105"
> 
{!showGptSearch &&  <img alt="user-icon" className="w-8 h-8 ml-1 mr-2 rounded-full" src={ChatGPTLogo}  />}
  
  {!showGptSearch ?  "CHATGPT" : "HOME"}
 
</button>



<button
type="button"
onClick={handleSignOut}
className="text-white hover:text-white border border-[] hover:bg-[your-hover-color] focus:ring-4 focus:outline-none focus:ring-[your-focus-color] font-medium rounded-lg text-xs px-3 py-1.5 text-center me-2 mb-2 dark:border-[your-dark-border-color] dark:text-[your-dark-text-color] dark:hover:text-white dark:hover:bg-[your-dark-hover-color] dark:focus:ring-[your-dark-focus-color] flex items-center transition-transform transform hover:scale-105"
>

Sign Out
</button>
            <img alt="user-icon" className="w-10 h-10 ml-2 my-1 rounded-full border-black border" src={UserIcon} />
            <div>
              <p className="text-white flex mt-2 p-2 my-2">
               shadab khan <p className="ml-4 mt-1"> <FaCaretDown /> </p>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

