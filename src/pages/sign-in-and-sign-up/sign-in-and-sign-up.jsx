import React from 'react'
import SignIn from './Sign-in/signin.component'
import Signup from './Singup/sign-up.component'

import './sign-in-and-sign-up.scss'
const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">

        <SignIn/>
        <Signup/>
        </div>
    )
}

export default SignInAndSignUp
