import React from 'react';

interface TaskProps {
  id: string;
  name: string;
  done: boolean;
  deleteTask: (taskId: string) => void;
  toggleTaskDone: (taskId: string) => void;
}

export const Task: React.FC<TaskProps> = ({ id, name, done, deleteTask, toggleTaskDone }) => {
  return (
    <div className='flex items-center justify-between p-2 bg-slate-800 rounded-md'>
      <div className='flex items-center'>
        <input
          type='checkbox'
          checked={done}
          onChange={() => toggleTaskDone(id)}
          className='mr-2'
        />
        <span className={`text-white ${done ? 'line-through' : ''}`}>{name}</span>
      </div>
      <button className='text-gray-400 hover:text-gray-600' onClick={() => deleteTask(id)}>
        Excluir
      </button>
    </div>
  );
};