import React from 'react';
import Title from './Title';
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer, FaWarehouse, FaCity, FaSeedling, FaEnvira, FaKeybase, FaStickerMule, FaWalking, FaMotorcycle, FaLeaf, FaShower} from 'react-icons/fa';
import { useState } from 'react';
import Translate from '../helpers/locale/translator';

const Services = () =>{
    const [services] = useState([
        {
            icon:<FaCity/>,
            title: "La Aldea, el 'Santorini' colombiano",
            info: ""
        },
        {
            icon:<FaWalking/>,
            title: "Tour rio Magdalena",
            info: ""
        },
        {
            icon:<FaHiking/>,
            title: "Rio Claro - Balneario San Juan - Quebrada Sonia - El puente Lata - Cascada el Prado",
            info: ""
        },
        {
            icon:<FaStickerMule/>,
            title: "Hacienda Nápoles",
            info: ""
        },
        {
            icon:<FaMotorcycle/>,
            title: "Tour en Cuatrimotos",
            info: ""
        },
        {
            icon:<FaShower/>,
            title: "Rafting - Kayak",
            info: ""
        }
    ]);
    return(
    <div className="container-fluid services">
        <Title title={Translate("Services")} />
       <div className="row">
          {services.map((item, index) => {
             return(
               <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                   <div className="card shadow-lg border-0 p-4">
                       <article className="service">
                       <span>{item.icon}</span>
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                       </article>              
                  </div>
               </div>
             )
          })}
       </div>
    </div>
)
}
export default Services;