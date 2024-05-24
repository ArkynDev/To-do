import './App.css';
import { Actions } from './components/Actions';
import { Task } from './components/Task';

function App() {

  return (
    <>
      <div className='w-screen h-screen flex justify-center relative'>
        <img className='bg-img absolute w-full h-[250px] bg-cover bg-center bg-no-repeat blend' src="" alt="" />
        <div className='flex flex-col pt-20 w-2/5 z-10 gap-6'>
          <h1 className=' text-xl'>To Do</h1>
          <div className='flex w-full bg-slate-900 p-4 rounded-md'>
            <input type="text" name="" id="" placeholder='Criar nova tarefa...' className=' w-full bg-transparent focus:outline-none' />
            <button className=''>Adicionar</button>
          </div>
          <div className='flex flex-col bg-slate-900  pb-4 flex-auto mb-8 rounded-md'>
            <div className='flex flex-col flex-auto'>
              <Task />
              <Task />
            </div>
            <Actions />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
