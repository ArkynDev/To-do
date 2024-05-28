
export const AddTaskForm = () => {

    return (
        <form className='flex items-center w-full bg-slate-900 p-4 rounded-md'>
            <div className="flex flex-col flex-auto gap-4">
                <input
                    type="text"
                    id="taskName"
                    name="taskName"
                    required
                    placeholder='Criar nova tarefa...'
                    className=' w-full bg-transparent focus:outline-none'
                />
                <input 
                    type="text" 
                    id="category"
                    name="category" 
                    required
                    placeholder="categoria..." 
                    className=' w-full bg-transparent focus:outline-none' 
                />
            </div>
            <button type="submit" className="flex items-center justify-center bg-slate-400 rounded-lg px-4 py-3">Adicionar</button>
        </form>
    );
};