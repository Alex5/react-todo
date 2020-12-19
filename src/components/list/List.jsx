import React from 'react';
import './List.scss'
import classNames from "classnames";

const List = ({items, onClick}) => {
    return (
        <div>
            <ul onClick={onClick} className="list">
                {items.map((item, index) => (
                    <li key={index} className={classNames(item.className, {active: item.active})}>
                        <i>
                            {item.icon ? item.icon : <i className={`badge badge--${item.color}`}/>}
                        </i>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;