import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


export default function HeaderButtons ({title, src}){
    return(
        <li className="nav-item active">
        <a className="nav-link" href={src}>{title}</a>
        </li>
    )
}

HeaderButtons.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string,
}

HeaderButtons.defaultProps = {
    title: 'asdad',
    src: "sad"
}