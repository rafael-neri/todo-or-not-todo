import React from "react";

export function Item({ title, checked, children }) {
    return (
        <li className={checked ? 'checked' : ''} >
            <div style={checked ? { textDecoration: 'line-through' } : {}}>
                {title}
            </div>
            {children}
        </li>
    )
}
