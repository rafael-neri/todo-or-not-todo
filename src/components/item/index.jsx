import React from "react";

export function Item({ title, checked, children }) {
    return (
        <li className={checked ? 'checked' : ''} >
            <div>{title}</div>
            {children}
        </li>
    )
}
