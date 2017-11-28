import React from 'react';
import PrimaryBtn from '../../components/default-btn';
import {Link} from "react-router-dom";
import getUserSaga from "./sagas";

export default function Header(){

  const signUpClick = function(){
    
  }

    return (
        <div className="header-item" uk-sticky="bottom: #offset">
          <Link to='/' className="uk-button uk-button-text">Home</Link>
          <div className="account-settings">
            <Link to='/account' onClick={getUserSaga} className="uk-button uk-button-text">Sign in</Link>
            <PrimaryBtn onClick = {signUpClick()} title="Sign up" />
          </div>

        </div>
    );
  };