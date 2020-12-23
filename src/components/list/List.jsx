import React from 'react';
import './List.scss'
import classNames from "classnames";
import removeBtn from './../../assets/img/removeBtn.svg'

const List = ({items,isRemovable, onClick, onRemove}) => {
    return (
        <div>
            <ul onClick={onClick} className="list">
                {items.map((item, index) => (
                    <li key={index} className={classNames(item.className, {active: item.active})}>
                        <i>
                            {item.icon ? item.icon : <i className={`badge badge--${item.color}`}/>}
                        </i>
                        <span>{item.name}</span>
                        {isRemovable && <img onClick={() => {onRemove(item)}} className="list__remove-btn" src={removeBtn} alt="Удалить список"/>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;