import React, {useState} from 'react';
import Badge from "../../Badge/Badge";
import closeAddListBtn from "../../../assets/img/Vector.svg";

const Popup = ({colors, onCloseListClick, onAddList}) => {

    const [popupInput, popupInputChange] = (useState(''))
    const [selectedColor, selectColor] = useState(colors[0].id)

    const onPopupInputChange = (e) => {
        popupInputChange(e.target.value);
    }

    const onAddListClick = () => {
        if (!popupInput) {
            alert('Введите название списка')
            return;
        }
        const color = colors.filter(color => color.id === selectedColor)[0].name;
        onAddList({
            "id": Math.random(),
            "name": popupInput,
            "colorId": selectedColor,
            "color": color
        });
        popupInputChange('')
    }

    return (
        <div className="add-list__popup">
            <input autoFocus={true} onChange={onPopupInputChange} value={popupInput} className="field" placeholder="Название папки"/>
            <Badge selectedColor={selectedColor} selectColor={selectColor} colors={colors}/>
            <div onClick={onCloseListClick} className="close-button">
                <img src={closeAddListBtn} alt="Закрыть"/>
            </div>
            <button onClick={onAddListClick} className="button">Добавить</button>
        </div>
    )
}

export default Popup;