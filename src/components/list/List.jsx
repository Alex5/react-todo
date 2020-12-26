import React from 'react';
import './List.scss'
import classNames from "classnames";
import removeBtn from './../../assets/img/removeBtn.svg'
import axios from 'axios';

const List = ({items, isRemovable, onClick, onRemove}) => {
    const removeList = item => {
        if (window.confirm('Удалить?')) {
            axios.delete('http://localhost:3001/lists/' + item.id)
            onRemove(item.id)
        }
    }
    return (
            <ul onClick={onClick} className="list">
                {items.map(item => (
                    <li className={classNames(item.className, {active: item.active})}>
                        <i>
                            {item.icon ? item.icon : <i className={`badge badge--${item.color.name}`}/>}
                        </i>
                        <span>{item.name}</span>
                        {isRemovable && <img onClick={() => {
                            removeList(item)
                        }} className="list__remove-btn" src={removeBtn} alt="Удалить список"/>}
                    </li>
                ))}
            </ul>
    )
}

export default List;