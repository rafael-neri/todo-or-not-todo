import React from "react";
import { TasksContext } from "../../context/tasks";
import { Buttons } from "../buttons";
import { Item } from "../item";

export function ListItems() {
    return (
        <ul>
            <TasksContext.Consumer>
                {state => (
                    state.listTask.map((task, key) => (
                        <Item key={key} title={task.title} checked={task.checked}>
                            <Buttons state={state} id={task.id} />
                        </Item>
                    ))
                )}
            </TasksContext.Consumer>
        </ul>
    )
}
