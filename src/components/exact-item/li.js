import React from 'react';

export default function Li({item, label, option}){

    return(
        <li className="list-group-item">
            <span>{label}</span>
            <span>{item[option]}</span>
        </li>
    )
}
