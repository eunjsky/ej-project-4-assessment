import React from 'react'
import './Circles.css'



function Circles(props) {
    
    
    return (
        <div className="Circles"> 
            <div className={props.circleSelected === '1' ? 'selected': ''}>1</div>
            <div className={props.circleSelected === '2' ? 'selected': ''}>2</div>
            <div className={props.circleSelected === '3' ? 'selected': ''}>3</div>
            <div className={props.circleSelected === '4' ? 'selected': ''}>4</div>
        </div>
    )
}

export default Circles
