import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null)
    const name = useRef(null)
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = () => {
        //validate the form data
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return;

        //sign up/sign in Logic
        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                        navigate("/browse")

                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMessage(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " : " + errorMessage)
                });

        }
        else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user)
                    navigate("/browse")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " : " + errorMessage)

                });
        }

    }
    return (
        <div >
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg' alt="background" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='p-12 absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl p-2'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm &&
                    (<input ref={name} type="text" placeholder='Full Name' className='p-4 m-2 w-full bg-gray-700 rounded-lg' />

                    )}
                <input ref={email} type="text" placeholder='Email Address' className='p-4 m-2 w-full bg-gray-700 rounded-lg' />
                <input ref={password} type="password" placeholder='Password' className='p-4 m-2 w-full bg-gray-700 rounded-lg' />
                <p className='text-red-400 p-4 font-bold'>{errorMessage}</p>
                <button className='p-4 mx-2 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-4 cursor-pointer " onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Aleady registered? Sign In Now"}</p>
            </form>
        </div>
    )
}
export default Login