import React, { useState }  from 'react';
import "./CircleSelector.css";


const CircleSelector = (props) => {

    return (
        <div className="CircleSelector"> 
        <button className={props.circleSelected === '1' ? 'selected': '' } onClick={() => {props.handleSelectCircle('1')}} >{props.circleSelected === '1' ? 'Circle 1 Selected' : 'SELECT CIRCLE 1' }</button>
        <button className={props.circleSelected === '2' ? 'selected': '' } onClick={() => {props.handleSelectCircle('2')}} >{props.circleSelected=== '2' ? 'Circle 2 Selected' : 'SELECT CIRCLE 2' }</button>
        <button className={props.circleSelected === '3' ? 'selected': '' } onClick={() => {props.handleSelectCircle('3')}} >{props.circleSelected === '3' ? 'Circle 3 Selected' : 'SELECT CIRCLE 3' }</button>
        <button className={props.circleSelected === '4' ? 'selected': '' } onClick={() => {props.handleSelectCircle('4')}} >{props.circleSelected === '4' ? 'Circle 4 Selected' : 'SELECT CIRCLE 4' }</button>
    
        </div>
    );
}

export default CircleSelector;