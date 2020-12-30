import React, {useEffect, useState} from 'react';
import Badge from "../../Badge/Badge";
import closeAddListBtn from "../../../assets/img/Vector.svg";
import axios from "axios";
import firebase from "firebase";

const Popup = ({colors, onCloseListClick, onAddList}) => {

    const [popupInput, popupInputChange] = (useState(''))
    const [selectedColor, selectColor] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const onPopupInputChange = (e) => {
        popupInputChange(e.target.value);
    }

    useEffect(() => {
        if (Array.isArray(colors)) {
            selectColor(colors[0].id)
        }
    }, [colors]);

    const onAddListClick = () => {
        if (!popupInput) {
            alert('Введите название списка')
            return;
        }
        setIsLoading(true)

        const color = colors.filter(color => color.id === selectedColor)[0];
        axios
            .post('https://ilyin-react-todo-default-rtdb.firebaseio.com/lists.json', {
                name: popupInput,
                colorId: selectedColor,
                color: color
            })

            .then(({data}) => {
                const colorObj = {...data, color, tasks: []}
                onAddList(colorObj);
                popupInputChange('')
                onCloseListClick();
            })
            .catch(() => {
                alert('Ошибка добавления списка!')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="add-list__popup">
            <input autoFocus={true} onChange={onPopupInputChange} value={popupInput} className="field field__popup"
                   placeholder="Название папки"/>
            <Badge selectedColor={selectedColor} selectColor={selectColor} colors={colors}/>
            <div onClick={onCloseListClick} className="close-button">
                <img src={closeAddListBtn} alt="Закрыть"/>
            </div>
            <button disabled onClick={onAddListClick} className="button">
                {isLoading ? "Добавление..." : "Добавить"}
            </button>
        </div>
    )
}

export default Popup;