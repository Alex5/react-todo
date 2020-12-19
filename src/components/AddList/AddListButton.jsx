import React, {useState} from 'react'
import List from "../list/List";
import closeAddListBtn from './../../assets/img/Vector.svg'

import './AddList.scss'
import Badge from "../Badge/Badge";

const AddListButton = ({colors}) => {

    const [visiblePopup, setVisiblePopup] = useState(false)

    const onAddListClick = () => {
        setVisiblePopup(true)
    }

    const onCloseListClick = () => {
        setVisiblePopup(false)
    }

    return (
        <div className="add-list">
            <List onClick={onAddListClick} items={[
                {
                    className: "list__add-button",
                    icon: (
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
                    ),
                    name: 'Добавить папку'
                },
            ]}/>
            {visiblePopup &&
            <div className="add-list__popup">
                <input className="field" placeholder="Название папки"/>
                <Badge colors={colors}/>
                <div onClick={onCloseListClick} className="close-button">
                    <img src={closeAddListBtn} alt="Закрыть"/>
                </div>
                <button className="button">Добавить</button>
            </div>
            }

        </div>
    )
}

export default AddListButton;