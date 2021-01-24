import React, {useState} from 'react';

import FromInput from '../../../Components/Form-Input/form.input.component'
import CustomButton from '../../../Components/button-component/button.component'

import {auth, createUserProfileDocument} from '../../../firebase/firebase.utility';
import FormInput from '../../../Components/Form-Input/form.input.component';

import '../Singup/sign-up.style.scss'


const Signup = () => {

    const [signup, setSignup] = useState({displayName:'',email:'', password:'',confirmPassword:''})
    console.log(signup);
    const handleSubmit = async e => {

        e.preventDefault();

        const { displayName, email,password,confirmPassword } = signup;

        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }

        try {
            
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            setSignup({displayName:'',email:'', password:'',confirmPassword:''})

        } catch (error) {
            console.log(error);
        }
        
    }

    const handleChange = (event) => {

        const { name, value } = event.target;

        setSignup((prevStyle) => ({
            ...prevStyle,
            [name]: value
          }));

         
      

    }
    

    return (
    <div className="sign-up">
    <h2 className="title">I do not have a account</h2>
    <span>Sign up with email and password</span>
    <form action="" className="sign-up-form" onSubmit={handleSubmit}>
    <FormInput
            type='text'
            placeholder='Display Name'
            name='displayName'
            value={signup.displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
          placeholder='Email'
            type='email'
            name='email'
            value={signup.email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
          placeholder='password'
            type='password'
            name='password'
            value={signup.password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
          placeholder='password confirm'
            type='password'
            name='confirmPassword'
            value={signup.confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
        <CustomButton type='submit'>SIGN UP</CustomButton>
    </form>
</div>

)

}

export default Signup;