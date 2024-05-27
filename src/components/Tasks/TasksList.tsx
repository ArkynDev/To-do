import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Task } from './Task';

interface TaskListProps {
    deleteTask: (taskId: string) => void;
    }

export const TasksList: React.FC<TaskListProps> = ({ deleteTask }) => {
    const tasks = useSelector((state) => state.tasks); // Get tasks from Redux state

    useEffect(() => {
        
    }, [tasks]);
    
    return (
        <div className='flex flex-col flex-auto'>
            {tasks.map((task) => (
                <Task key={task.id} {...task} deleteTask={deleteTask} />
            ))}
        </div>
    );
};
