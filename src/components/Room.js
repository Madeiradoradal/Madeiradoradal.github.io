import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from "../assets/images/photos/DSC_7894-HDR-Editar.jpg";
import PropTypes from 'prop-types';
import Translate from '../helpers/locale/translator';

export default function Room({room}) {
    const { name , slug, images, price } = room;
    return (
        <div className="col-md-4 col-12 mx-auto p-2">
            <div className="card shadow-lg border-0 room">
                <img src={images[0] || defaultImg} alt="single room" className="img-fluid"/>
                <div className="price-top">
                    <h6>$ {price}</h6>
                    <p>{Translate("per night")}</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-warning room-link text-center" >{Translate("Features")}</Link>
              <p className="room-info">{Translate(name)}</p>
            </div>
        </div>
    )
}
 
Room.propTypes = {
    room: PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}