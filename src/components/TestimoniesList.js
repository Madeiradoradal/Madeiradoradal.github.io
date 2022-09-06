import React from 'react'
import Room from './Room';
import Translate from '../helpers/locale/translator';
import item from '../data/testimoniesData';
import { formatTestimonyData } from '../context';
import Testimony from './Testimony';


export default function TestimoniesList() {
    var testimony = formatTestimonyData(item);
    return (
        <div className="testimony">
            <h1 className="display-4 mb-4">{Translate("What Our Clients says")}</h1>
            <div className="row mb-5">
                <div className="col-md-10 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {
                                testimony.map(item => {
                                    return <li key={item.id} data-target="#carouselExampleCaptions" data-slide-to={item.id} className={item.first? "active" : null}></li>
                                })
                            }
                        </ol>
                        <div className="carousel-inner card border-0 shadow-lg p-4">
                        {
                            testimony.map(item => {
                                return <Testimony key={item.id} testimony={item}/>;
                            })
                        }
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
