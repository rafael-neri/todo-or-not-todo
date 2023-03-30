import React from "react";
import { Link } from "react-router-dom";

import { ListItems } from "../../components/list-items";

export function List() {
    return (
        <div className="list">
            <div className="add">
                <Link to="/add">
                    <button>Adicionar</button>
                </Link>
            </div>
            <div className="items">
                <ListItems />
            </div>
        </div>
    )
}
