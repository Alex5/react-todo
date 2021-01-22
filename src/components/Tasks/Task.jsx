import React from 'react';

import removeBtn from './../../assets/img/removeBtn.svg'

const Task = ({id, text, onRemove, onEdit, list, onCompletedTask, completed}) => {

    const onChangeCheckBox = (e) => {
        onCompletedTask(list.id, id, e.target.checked)
    }

    return (
        <div key={id} className="checkbox__items">
            <div className="checkbox">
                <input onChange={onChangeCheckBox} id={id} type="checkbox" checked={completed}/>
                <label htmlFor={id}>
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="black"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </label>
            </div>
            <div onClick={() => onEdit(list.id, {id, text})} className="checkbox__items-text">
                {completed
                    ? <p className="field field-checked">{text}</p>
                    : <p className="field">{text}</p>}
            </div>
            <div onClick={() => onRemove(list.id, id)} className="checkbox__items-close">
                <img src={removeBtn} alt="Удалить задачу"/>
            </div>
        </div>
    )
}

export default Task;