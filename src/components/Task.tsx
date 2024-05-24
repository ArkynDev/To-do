import { Check } from "./Check/Check"

export const Task = () => {
    return(
        <div className="flex relative px-4">
            <div className="flex items-center py-4 before:contents-[' '] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[0.5px] before:dark:bg-white before:bg-black">
                <div className="flex items-center gap-4">
                    <Check />
                    <p>Task Name</p>
                </div>
                <div className="flex items-center">
                    <button></button>
                </div>
            </div>
        </div>
    )
}