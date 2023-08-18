import React from "react";
import ImgStar from '../images/star.png';


export default function Card(props) {
    return(
        <div className="card">
            <img src ={props.img} alt="imgFromPerson" className="card--image"/>
            <div className="cardStats">
                <img src = {ImgStar} alt="StarImage" className="starImg"/>
                <span>{props.rate}</span>
                <span>({props.reviews})</span>
                <span>{props.country}</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}