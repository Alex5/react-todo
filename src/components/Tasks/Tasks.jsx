import React from 'react';
import editBtn from './../../assets/img/editBtnsvg.svg'
//styles
import './Tasks.scss'
//utils
import axios from "axios";
//component
import AddTasksForm from "./AddTasksForm";


const Tasks = ({list, onEditTitle, onAddTask, withoutEmpty}) => {

    const editTitle = () => {
        const newTitle = window.prompt('Названия списка', list.name)
        if (newTitle) {
            onEditTitle(list.id, newTitle)
            axios.patch('http://localhost:3001/lists/' + list.id, {
                name: newTitle
            }).catch(() => {
                alert("Не удалось обновить название списка")
            })
        }
    };


    return (
        <div className="tasks">
            <div className="tasks__header">
                <div className="tasks__title">
                    <h2 style={{color: list.color.hex}}>{list.name}</h2>
                    <img onClick={editTitle}
                         className="tasks__title-editBtn" src={editBtn} alt="Изменить заголовок"/>
                </div>
                <hr className="tasks__title-line"/>
            </div>
            {!withoutEmpty && list.tasks && !list.tasks.length && <h1 className="no-tasks">Задачи отсутствуют</h1>}
            <div className="checkbox__body">
                {list.tasks && list.tasks.map(item => (
                    <div key={item.id} className="checkbox__items">
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
                            <input className="field" readOnly value={item.text}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="tasks__footer">
                <AddTasksForm onAddTask={onAddTask} list={list}/>
            </div>
        </div>
    )
}

export default Tasks;