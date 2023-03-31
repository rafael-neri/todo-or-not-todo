import React, { useState, useMemo } from "react";

import { TasksContext } from "../../context/tasks";
import { Outlet } from "react-router-dom";
import { Title } from "../../components/title";

export function Home() {

    // Estado inicial já com algumas tarefas
    const [listTask, setListTask] = useState([
        { id: Math.random(), title: "Estudar Node", checked: true },
        { id: Math.random(), title: "Estudar React", checked: false },
        { id: Math.random(), title: "Estudar Next", checked: false },
    ]);

    const ctx = useMemo(() => ({ listTask, setListTask }));

    return (
        <div className="app">
            <Title />
            <TasksContext.Provider value={ctx} >
                <Outlet />
            </TasksContext.Provider>
        </div>
    )
}
