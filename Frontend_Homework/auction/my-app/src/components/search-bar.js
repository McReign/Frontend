import React, { Component } from 'react'; 

import icon from '../images/logo.png';

export default function SearchBar(){
    return (
        <nav class="uk-navbar-container" >
            <div class="uk-navbar-left">
    
                <div class="uk-navbar-item">
                    <form class="uk-search uk-search-navbar">
                        <span className="uk-search-icon uk-search-icon-flip">{icon}</span>
                        <input class="uk-search-input" type="search" placeholder="Search..." />
                    </form>
                </div>
    
            </div>
        </nav>
    );
  }


