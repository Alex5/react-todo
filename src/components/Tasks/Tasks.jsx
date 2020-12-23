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
            </div>
        </div>
    )
}

export default Tasks;