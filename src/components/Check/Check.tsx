import './Check.css';

export const Check = () => {
    return(
        <div className="content">
            <label className="checkBox shadow-[0px 0px 0px 2px] dark:shadow-slate-200">
                <input type="checkbox" id="ch1"/>
                <div className="transition dark:bg-slate-200 "></div>
            </label>
        </div>
    )
}