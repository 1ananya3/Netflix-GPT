import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div >
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg' alt="background" />
            </div>
            <form className='p-12 absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl p-2'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                {!isSignInForm &&
                 (<input type="text" placeholder='Full Name' className='p-4 m-2 w-full bg-gray-700 rounded-lg' />

                 )}
                <input type="text" placeholder='Email Address' className='p-4 m-2 w-full bg-gray-700 rounded-lg' />
                <input type="password" placeholder='Password' className='p-4 m-2 w-full bg-gray-700 rounded-lg' />
                <button className='p-4 mx-2 my-6 bg-red-700 w-full rounded-lg'>
                    {isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-4 cursor-pointer " onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Aleady registered? Sign In Now"}</p>
            </form>
        </div>
    )
}
export default Login