import React from "react";
import ImgStar from '../images/star.png';


export default function Card(props) {
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.item.location === "Online") {
        badgeText = "ONLINE"
    }


    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src ={require(`../images/${props.item.coverImg}`)} alt="imgFromPerson" className="card--image"/>
            <div className="cardStats">
                <img src = {ImgStar} alt="StarImage" className="starImg"/>
                <span>{props.item.stats.rating}</span>
                <span>({props.item.stats.reviewCount})</span>
                <span>{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p>From ${props.item.price} / person</p>
        </div>
    )
}