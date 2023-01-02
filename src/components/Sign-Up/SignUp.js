import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../formInput/FormInput";
import { auth , createUserProfileDocument } from "../firebase/Firebase.utils";
import './SignUp.scss';

class SignUp extends React.Component{
constructor(){
super();

this.state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

}

render(){
    const {displayName, email , password, confirmPassword} = this.state
    return(
        <div className="sign-up">
            <h2 className="title "> I do not have a account</h2>
            <span>sign up with the email  and password</span>
            <from className="sign-up-form" onSubmit={ this.handle}>
                 <FormInput
                 type='text'
                 name=' dispalyName' 
                 value={displayName}
                 onChange={this.handleChange}
                 lable=' Display Name'
                 requried
                    
                 ></FormInput>
            </from>
        </div>
    )
}
}

