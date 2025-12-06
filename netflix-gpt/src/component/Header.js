import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    // Unsubscribe when component unmounts
    return ()=> unsubscribe();

  }, [])
  return (
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="logo" />
      {user && <div className='flex p-2'>
        <img alt='userIcon' className='w-12 h-12 rounded-md' src={user.photoURL} />
        <button className='m-2 p-2 bg-red-700 font-bold text-white rounded-md' onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header