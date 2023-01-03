import React from "react";
import SignIn from "../../Sign-In/SignIn";
import SignUp from "../../Sign-Up/SignUp";
import "./SignInAndSignUp.scss"

export const SignInAndSignUp = () => {
  return (
    <div className="SignInAndSignUp">
      <SignIn /> 
      <SignUp />
    </div>
  );
};
