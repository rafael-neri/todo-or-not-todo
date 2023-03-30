import React from "react";
import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid';

export function Buttons({ state, id }) {

    const toggleChecked = (state, id) => {
        const index = state.listTask.findIndex((task) => task.id === id);
        const newList = state.listTask;
        newList[index].checked = !state.listTask[index].checked;
        state.setListTask([...newList]);
    };

    const removeTask = (state, id) => {
        const newList = state.listTask.filter((task) => task.id !== id);
        state.setListTask(newList);
    };

    return (
        <div className="buttons">
            <CheckIcon className="icon" onClick={() => toggleChecked(state, id)} />
            <TrashIcon className="icon" onClick={() => removeTask(state, id)} />
        </div>
    )
}
