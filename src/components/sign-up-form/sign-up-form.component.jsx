import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import FormInput from '../form-input/form-input.components'
import Button from '../button/button.components'

import './sign-up-form.styles.scss'
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}


const SignUpForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    
    console.log('hit');

    const resetFromField = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFromField();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot Register user, email already in use');
            }
            console.log('Error in encountering auth: ', error);
        }
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>SignUp with your email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required />
                
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />
                
                <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required />
                
                <FormInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required />

                <Button displayName="Sign Up" type="submit" />
                {/* <button type="submit">Sign Up</button> */}
            </form>
        </div>
    )
}

export default SignUpForm;