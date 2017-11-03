import React, {Component} from 'react';
import styled from "styled-components";

import ListItems from "../ListItems/index";



export default function List ({data}){
    return(
        <ul className="list-group">
            {data.map((dataField, index) =>
                <ListItems {...dataField}></ListItems>
            )}
        </ul>
    )
}