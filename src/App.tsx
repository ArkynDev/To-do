import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Actions } from './components/Actions';
import { AddTaskForm } from './components/AddTaskForm';
import { TasksList } from './components/Tasks/TasksList';

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addTask = (taskName: string) => {
    dispatch(addTask({ id: Date.now(), name: taskName, done: false }));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('toDoListState'); // Clear localStorage data
    store.dispatch({ type: '@@redux/INIT' }); // Reset Redux state
  };

  const deleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <div className='w-screen h-screen flex justify-center relative'>
        <img className='bg-img absolute w-full h-[250px] bg-cover bg-center bg-no-repeat blend' src="" alt="" />
        <div className='flex flex-col pt-20 w-2/5 z-10 gap-6'>
          <h1 className=' text-xl'>To Do</h1>
          <AddTaskForm onSubmit={addTask} />
          <div className='flex flex-col bg-slate-900  pb-4 flex-auto mb-8 rounded-md'>
            {tasks.length > 0 ? <TasksList deleteTask={deleteTask} /> : <div className='flex flex-auto'></div> }
            <Actions />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
