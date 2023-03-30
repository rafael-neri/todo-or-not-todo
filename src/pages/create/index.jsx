import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TasksContext } from "../../context/tasks";

export function Create() {

    const [task, setTask] = useState("");
    const navigate = useNavigate();

    const addTask = (state) => {
        if (!task) return alert("Preencha uma tarefa");
        const newTask = {
            id: Math.random(),
            title: task,
            checked: false,
        };
        state.setListTask([...state.listTask, newTask]);
        setTask("");
        navigate('/');
    };

    return (
        <TasksContext.Consumer>
            {state => (
                <div className="create">
                    <input
                        type={"text"}
                        placeholder={"Tarefa"}
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button onClick={() => addTask(state)}>
                        Adicionar
                    </button>
                </div>
            )}
        </TasksContext.Consumer>
    )
}
