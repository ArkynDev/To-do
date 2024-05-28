import { useState } from 'react';

import './App.css';
import { Actions } from './components/Actions';
import { AddTaskForm } from './components/AddTaskForm';
import { TasksList } from './components/Tasks/TasksList';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Ir malhar",
      category: "Saúde",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a faculdade",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  return (
    <>
      <div className='w-screen h-screen flex justify-center relative'>
        <div className='bg-img absolute w-full h-[250px] bg-cover bg-center bg-no-repeat blend'></div>
        <div className='flex flex-col pt-16 w-1/2 z-10 gap-3'>
          <h1 className=' text-xl'>To Do</h1>
          <AddTaskForm />
          <div className='flex flex-col flex-auto bg-slate-900 pb-4 mb-8 rounded-md'>
            <TasksList tasks={tasks} />
            <Actions />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
