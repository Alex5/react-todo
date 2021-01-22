import React from 'react';
import './List.scss'
import classNames from "classnames";
import removeBtn from './../../assets/img/removeBtn.svg'
import axios from 'axios';

const List = ({items, isRemovable, onClick, onRemove, onClickItem, activeItem}) => {
    const removeList = item => {
        if (window.confirm('Удалить?')) {
            axios.delete('/lists/' + item.id).then(() => {
                onRemove(item.id);
            });
        }
    }
    return (
        <ul onClick={onClick} className="list">
                {items.map(item => (
                    <li key={Math.random()} onClick={onClickItem ? () => {
                        onClickItem(item)
                    } : null} className={classNames(item.className, {
                        active: item.active ? item.active : activeItem && activeItem.id === item.id
                    })}>
                        <i>
                            {item.icon ? item.icon : <i className={`badge badge--${item.color.name}`}/>}
                        </i>
                        <p>{item.name}</p><span>{item.tasks && `${item.tasks.length}`}</span>
                        {isRemovable && <img onClick={() => {
                            removeList(item)
                        }} className="list__remove-btn" src={removeBtn} alt="Удалить список"/>}
                    </li>
                ))}
        </ul>
    )
}

export default List;