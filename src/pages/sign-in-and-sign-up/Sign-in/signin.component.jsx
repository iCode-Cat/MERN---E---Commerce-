import React, {useState} from 'react'
import CustomButton from '../../../Components/button-component/button.component'
import FormInput from '../../../Components/Form-Input/form.input.component';
import {signInWithGoogle} from '../../../firebase/firebase.utility'

function SignIn() {

    const [signin, setSignin] = useState({email:'', password:''});


    const handleSubmit = (e) => {
        e.preventDefault();
        setSignin({email:'', password:''})
    }

    const handleChange = (e) => {

            const { value, name } = e.target;
            setSignin({[name]:value})

    }
    return (
       <div className="sign-in">
           <h2>I already have an account</h2>
           <span>Sign in with your email and password</span>
           <form onSubmit={handleSubmit}>

           <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={signin.email}
            label='email'
            required
          />
             <FormInput
            name='password'
            type='password'
            value={signin.password}
            handleChange={handleChange}
            label='password'
            required
          />
            <CustomButton type='submit'> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
           </form>
       </div>
    )
}

export default SignIn
