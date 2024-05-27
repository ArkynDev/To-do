import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library

export const AddTaskForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const taskName = (event.target as HTMLFormElement).elements['taskName'].value;
        dispatch(
        addTask({ id: uuidv4(), name: taskName, done: false }) // Generate UUID
        );
    };

    return (
        <form onSubmit={handleSubmit} className='flex w-full bg-slate-900 p-4 rounded-md'>
            <input 
                type="text" 
                id="taskName" 
                name="taskName" 
                placeholder='Criar nova tarefa...' 
                className=' w-full bg-transparent focus:outline-none' 
            />
            <button type="submit">Adicionar</button>
        </form>
    );
};