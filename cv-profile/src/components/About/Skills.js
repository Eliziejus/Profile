import React, { useState } from 'react';
import './skills.css';

const Skills = ({level}) => {

    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${level}%`
        }
        setStyle(newStyle);
    })

    return (
        <div className="progress ">
            <div className="progress-level" style={style}>
                {level}%

            </div>
        </div>
    )
}

export default Skills
