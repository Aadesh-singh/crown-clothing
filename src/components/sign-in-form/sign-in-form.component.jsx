import { useState, useContext } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase";
import FormInput from '../form-input/form-input.components'
import Button from '../button/button.components'

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: "",
    password: ""
}


const SignInForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    // console.log(formFields);

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
            const {user} = await signInAuthWithEmailAndPassword(email, password);
            // setCurrentUser(user);
            
            resetFromField();
        } catch (error) {
            switch (error.code){
                case 'auth/wrong-password':
                    alert('incorrect password try again !');
                    break;
                case 'auth/user-not-found':
                    alert('User Not Found');
                    break;
                default:
                    console.log(error);
            }
        }
    }
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();  
        
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account ?</h2>
            <span>SignIn with your email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />
                
                <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required />

                <div className="buttons-container">
                    <Button displayName="Sign In" type="submit" />
                    <Button type="button" displayName="Google Sign In" buttonType="google" onClick={signInWithGoogle} />
                </div>
            </form>
        </div>
    )
}

export default SignInForm;