import React from 'react';
import Check from './Check/Check'; // Import the Check component
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { updateTask } from '../store/actions'; // Import updateTask action

interface Task {
    id: number;
    name: string;
    done: boolean;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const dispatch = useDispatch();

    const handleToggleDone = (isChecked: boolean) => {
        dispatch(updateTask({ ...task, done: isChecked })); // Dispatch updateTask with updated done state
    };

    return (
        <div className="flex relative px-4">
            <div className="flex items-center py-4 before:contents-[' '] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[0.5px] before:dark:bg-white before:bg-black">
                <div className="flex items-center gap-4">
                    <Check isChecked={task.done} onChange={handleToggleDone} /> {/* Pass state and callback */}
                    <p>{task.name}</p>
                </div>
                <div className="flex items-center">
                    <button onClick={handleDeleteTask}>Excluir</button>
                </div>
            </div>
        </div>
    );
};

export default Task;
