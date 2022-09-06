import React from 'react'
import Room from './Room';

export default function Testimony({testimony}) {
    const { slug, image, name, comentary, first } = testimony;
    return (
        <div className={`carousel-item ${first? "active": null} text-center`}>
            <div className="row">
                <div className="col-md-8 col-12 my-auto">
                    <img src={image} className="text-center img-fluid" width="450" height="400" alt={slug} />
                </div>
                <div className="col-md-4 col-12 my-auto">
                    <div className="text-dark">
                        <h3 className="font-weight-bolder ">{name}</h3>
                        <p>{comentary}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
