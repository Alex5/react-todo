import React, {useState} from 'react'
import List from "../list/List";
import Popup from "./Popup/Popup";

import './AddList.scss'

const AddList = ({colors, onAddList}) => {

    const [visiblePopup, setVisiblePopup] = useState(false)

    const onAddListClick = () => {
        setVisiblePopup(true)
    }

    const onCloseListClick = () => {
        setVisiblePopup(false)
    }

    return (
        <div className="add-list">
            <List  onClick={onAddListClick} items={[
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
            <Popup onAddList={onAddList} colors={colors} onCloseListClick={onCloseListClick}/>
            }
        </div>
    )
}

export default AddList;