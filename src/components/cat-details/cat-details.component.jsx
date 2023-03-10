import React from "react";
import './card.style.css'
const CatDetails = ({ cat }) => {
    const { id, name, email } = cat;
    return (

        <div className="card-container" >
            <img alt={`cat ${name}`} src={`https://robohash.org/${id}?set=set4&size=150x150`} />
            <h2> {name}</h2>
            <p> {email} </p>
        </div>

    )
}
export default CatDetails;