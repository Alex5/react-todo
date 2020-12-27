import React, {useState} from 'react';
import axios from "axios";

import addBtn from "../../assets/img/addBtn.svg";

import './Tasks.scss'

const AddTasksForm = ({list, onAddTask}) => {

    const [tasksVisibleForm, setTasksVisibleForm] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isSending, setIsSending] = useState(null);

    const toggleFormVisible = () => {
        setTasksVisibleForm(!tasksVisibleForm);
        setInputValue('');
    }

    const addTask = () => {
        const obj =  {
            listId: list.id,
            text: inputValue,
            completed: false
        }
        if (!inputValue) {
            alert('Введите название задачи')
            return;
        }
        setIsSending(true)
        axios.post('http://localhost:3001/tasks', obj).then(({data}) => {
            console.log(data)
            onAddTask(list.id, data)
            toggleFormVisible()
        })
            .catch(() => {
                alert('Ошибка при добавление задачи!')
            })
            .finally(() => {
            setIsSending(false)
        })

    }

    return (
        <div className="tasks__form">
            {tasksVisibleForm
                ? <div className="tasks__form-block">
                    <input value={inputValue} onChange={e => setInputValue(e.target.value)} autoFocus={true} className="field"
                           placeholder="Текст задачи"/>
                    <button onClick={addTask} disabled={isSending} className="button">{isSending ? 'Добавление...' : 'Добавить задачи'}</button>
                    <button onClick={toggleFormVisible} className="button button--grey">Отмена</button>
                </div>
                : <div onClick={toggleFormVisible} className="tasks__form-new">
                    <img src={addBtn} alt="Добавить задачу"/>
                    <span>Новая задача</span>
                </div>
            }
        </div>
    )
}

export default AddTasksForm;