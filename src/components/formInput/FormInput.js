import React from "react";
import './FormInput.scss'

export const FormInput = ({ handleChange, lable, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {lable ? (
      <lable
        className={`${otherProps.value.length ? "shink" : ""}form-input-lable`}
      >
        {lable}
      </lable>
    ) : null}
  </div>
);
