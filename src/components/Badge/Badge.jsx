import React from 'react'
import './Badge.scss'

const Badge = ({colors, selectColor, selectedColor}) => {

    return (
        <div className="colors-selector" >
            {colors.map(c => (
                    <i onClick={() => {selectColor(c.id)}}
                       key={c.id}
                       className={selectedColor === c.id && 'active'}
                       style={{backgroundColor: `${c.hex}`}}
                    />
            ))}
        </div>
    )
}

export default Badge;