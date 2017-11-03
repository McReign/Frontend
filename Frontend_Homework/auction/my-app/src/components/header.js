import React from 'react';
import PrimaryBtn from './default-btn';

export default function Header(){
    return (
        <div className="header-item">
            <button className="uk-button uk-button-text">Sign in</button>
            <PrimaryBtn title="Sign up" />
        </div>
    );
  };