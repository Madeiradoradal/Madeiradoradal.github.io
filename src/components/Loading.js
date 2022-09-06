import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif';
import Translate from '../helpers/locale/translator';

export default function Loading() {
    return (
        <div className="loading">
           <h4>Rooms data loading...</h4>  
           <img  src={loadingGif} alt={Translate("loading please wait")}/>  
        </div>
    )
}
