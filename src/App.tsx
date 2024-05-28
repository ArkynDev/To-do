import { useState } from 'react';

import './App.css';
import { Actions } from './components/Actions';
import { AddTaskForm } from './components/AddTaskForm';

function App() {

  return (
    <>
      <div className='w-screen h-screen flex justify-center relative'>
        <div className='bg-img absolute w-full h-[250px] bg-cover bg-center bg-no-repeat blend'></div>
        <div className='flex flex-col pt-16 w-2/5 z-10 gap-3'>
          <h1 className=' text-xl'>To Do</h1>
          <AddTaskForm />
          <div className='flex flex-col bg-slate-900  pb-4 flex-auto mb-8 rounded-md'>
            
            <Actions />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
