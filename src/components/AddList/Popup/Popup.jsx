import React, {useEffect, useState} from 'react';
import Badge from "../../Badge/Badge";
import closeAddListBtn from "../../../assets/img/Vector.svg";
import axios from "axios";

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
        const color = colors.filter(color => color.id === selectedColor)[0].name;
        axios.post('http://localhost:3001/lists', {name: popupInput, colorId: selectedColor})
            .then(({data}) => {
                const colorObj = {...data, color: {name: color}}
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
            <button onClick={onAddListClick} className="button">
                {isLoading ? "Добавление..." : "Добавить"}
            </button>
        </div>
    )
}

export default Popup;