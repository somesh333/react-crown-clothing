import React from "react";
import "./SignIn.scss";
import { FormInput } from "../formInput/FormInput";
import { CustomButton } from "../CustomButton/CustomButton";



class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    
    this.setState ({
      email: "",
      password: "",
    })
  };

  handleChange = event =>{
    const {name, value} = event.target;

    this.setState({ [name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have a account</h2>
        <span> Sign in with your email and password</span>
        <from onSubmit={this.handleSubmit}>
          <FormInput
          name="email" 
          type="email" 
          value={this.state.email} 
          handleChange={this.handleChange}
          // lable='email'
          required />
          <label>Email</label>

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            // lable='email'
            required
          />
          <label>Password</label>

          <CustomButton type="submit"  >Sign in</CustomButton>
        </from>
      </div>
    );
  }
}
export default SignIn;
