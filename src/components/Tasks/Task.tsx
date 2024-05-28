import React from 'react';

import { CircleX } from 'lucide-react';

interface TaskProps {
  id: string;
  name: string;
  category: string;
  done: boolean;
}

export const Task: React.FC<TaskProps> = ({ name, category, done }) => {
  return (
    <div className='flex items-center justify-between p-2 bg-slate-800 rounded-md'>
      <div className='flex gap-4'>
        <input type="checkbox" name="" id="" />
        <div className='flex flex-col items-start'>
          <span className={`text-white ${done ? 'line-through' : ''}`}>{name}</span>
          <span className='font-thin text-xs'>({category})</span>
        </div>
      </div>
      <button className='text-gray-400 hover:text-gray-600'>
      <CircleX className=' text-red-500' />
      </button>
    </div>
  );
};