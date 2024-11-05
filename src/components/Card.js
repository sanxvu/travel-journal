import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img
                className="card-image"
                alt={props.location}
                src={props.imageURL}>
            </img>
            <div className="card-info">
                <div className="card-location-info">
                    <i class="fa fa-map-marker" style={{ color: "red" }} alt="pin icon"></i>
                    <p className="location-text">{props.location}</p>
                    <a className="viewGoogleMapsLink-text" href={props.googleMapsLink} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <p className="title-text">{props.title}</p>
                <p className="date-text">{props.startDate} - {props.endDate}</p>
                <p className="description-text">{props.description}</p>
            </div>

        </div>
    )
}