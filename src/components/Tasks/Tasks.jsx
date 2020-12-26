import React from 'react';
import editBtn from './../../assets/img/editBtnsvg.svg'
//styles
import './Tasks.scss'
//component
const Tasks = ({list}) => {
    return (
        <div className="tasks">
            <div className="tasks__header">
                <div className="tasks__title">
                    <h2>{list.name}</h2>
                    <img className="tasks__title-editBtn" src={editBtn} alt="Изменить заголовок"/>
                </div>
                <hr className="tasks__title-line"/>
            </div>
            {list.tasks.map(item => (
                <div className="checkbox__items">
                    <div className="checkbox">
                        <input id={item.id} type="checkbox"/>
                        <label htmlFor={item.id}>
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="black"
                                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </label>
                    </div>
                    <div className="checkbox__items-text">
                        <input readOnly value={item.text}/>
                    </div>

                </div>
            ))}
            <div>
                <span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1V11"
                                  stroke="#868686"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                </span>
                Новая задача
            </div>
        </div>

    )
}

export default Tasks;