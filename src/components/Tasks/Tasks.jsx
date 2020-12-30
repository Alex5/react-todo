import React from 'react';
import editBtn from './../../assets/img/editBtnsvg.svg'
//styles
import './Tasks.scss'
//utils
import axios from "axios";
//component
import AddTasksForm from "./AddTasksForm";
import Task from "./Task";
import removeBtn from "../../assets/img/removeBtn.svg";


const Tasks = ({list, onEditTitle, onAddTask, withoutEmpty, onRemoveTask, onEditTask, onCompletedTask, colors}) => {

    const editTitle = () => {
        const newTitle = window.prompt('Названия списка', list.name)
        if (newTitle) {
            onEditTitle(list.id, newTitle)
            axios.patch('https://ilyin-react-todo-default-rtdb.firebaseio.com/lists/' + list.id, {
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
                {list.tasks && list.tasks.map(task => (
                    <Task onCompletedTask={onCompletedTask} list={list} onRemove={onRemoveTask} onEdit={onEditTask} key={task.id} {...task} />
                ))}
            </div>
            <div className="tasks__footer">
                <AddTasksForm key={list.id} onAddTask={onAddTask}  list={list}/>
            </div>
        </div>
    )
}

export default Tasks;