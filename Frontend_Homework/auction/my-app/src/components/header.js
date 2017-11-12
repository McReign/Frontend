import React from 'react';
import PrimaryBtn from './default-btn';

export default function Header(){

  const signUpClick = function(){
    
  }

    return (
        <div className="header-item">
          <button className="uk-button uk-button-text">Home</button>
          <div className="account-settings">
            <button className="uk-button uk-button-text">Sign in</button>
            <PrimaryBtn onClick = {signUpClick()} title="Sign up" />
          </div>

        </div>
    );
  };