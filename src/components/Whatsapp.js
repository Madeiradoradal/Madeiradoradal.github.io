import React from 'react'

export default function Whatsapp({ cellphoneNumber , welcomeMessage  }) {
    return (
        <a href={`https://api.whatsapp.com/send?phone=${cellphoneNumber}&text=${welcomeMessage}`} className="float" target="_blank">
        <i className="fa fa-whatsapp my-float"></i>
        </a>
    )
}
