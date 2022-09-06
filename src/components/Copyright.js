import React from 'react'

export default function Copyright({ link , name , first  }) {
    return (
        <div className={`carousel-item ${first? "active": null}`}>
            <a href={link} className="text-reset fw-bold" target="_blank">
                {name}
            </a>
        </div>
    )
}
