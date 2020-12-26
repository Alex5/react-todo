import React from 'react';
import editBtn from './../../assets/img/editBtnsvg.svg'
//styles
import './Tasks.scss'
//component
const Tasks = () => {
    return (
        <div className="tasks">
            <div className="tasks__header">
                <div className="tasks__title">
                    <h2>Фронтенд</h2>
                    <img className="tasks__title-editBtn" src={editBtn} alt="Изменить заголовок"/>
                </div>
                <hr className="tasks__title-line"/>
            </div>
            <div className="checkbox__items">
                <div className="checkbox">
                    <input id="check" type="checkbox"/>
                    <label htmlFor="check">
                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </label>
                </div>
                <div className="checkbox__items-name">
                    <p>ReactJS Hooks (useState, useReducer, useEffect и т.д.)</p>
                </div>
            </div>
        </div>
    )
}

export default Tasks;