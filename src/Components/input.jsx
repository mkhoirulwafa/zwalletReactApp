import React from "react";

function Input(props) {
  if (props.classIcon === "lock") {
    return (
      <>
        <span className={props.classIcon}></span>
        <input
          id={props.classInput}
          type={props.classInput}
          placeholder={props.placeholder}
          autoComplete= 'off'
          required
        />
        <img
          className={props.visibility}
          src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/eye-crossed.png?raw=true"
          alt=""
        />
      </>
    );
  } else {
    return (
      <>
        <span className='mail'></span>
        <input
          id='email'
          type='email'
          placeholder='Enter your email here'
          autoComplete= 'off'
          required
        />
      </>
    );
  }
}

export default Input;
