import React from "react"

import { Task } from "./Task"

export const TasksList = ({ tasks }) => {
    return (
        <div className='flex flex-col flex-auto gap-2 p-2'>
            {tasks.map((task) => (
                <Task name={task.text} category={task.category} done={task.isCompleted} />
            ))}
        </div>
    )
}