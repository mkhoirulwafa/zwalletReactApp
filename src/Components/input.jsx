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
          onChange={props.onChange}
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
        <span className={props.classIcon}></span>
        <input
          id={props.classInput}
          type={props.classInput}
          placeholder={props.placeholder}
          autoComplete= 'off'
          onChange={props.onChange}
          required
        />
      </>
    );
  }
}

export default Input;
