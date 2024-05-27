import React from 'react';

import './Check.css';

interface CheckProps {
    isChecked: boolean;
    onChange: (isChecked: boolean) => void;
}

export const Check: React.FC<CheckProps> = ({ isChecked, onChange }) => {
    return(
        <div className="content">
            <label className="checkBox shadow-[0px 0px 0px 2px] dark:shadow-slate-200">
                <input type="checkbox" id="ch1" checked={isChecked} onChange={(event) => onChange(event.target.checked)} />
                <div className="transition dark:bg-slate-200 "></div>
            </label>
        </div>
    )
}