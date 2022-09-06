import React, { Component } from 'react'
import defaultBcg from '../assets/images/photos/DSC_7894-HDR-Editar.jpg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
import Translate from '../helpers/locale/translator';

export default class SingleRoom extends Component {
    constructor (props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (<div className="container roomerror">
                    <div className="row my-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4 error">
                                <h1 className="text-center display-4">{Translate("SORRY")}</h1>
                                <h3>{Translate("No such room could be found...")}</h3>
                                <Link to="/rooms" className="btn btn-warning mt-4 ">{Translate("Back to Rooms")}</Link>
                            </div> 
                        </div>
                    </div>
                </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg, ...defaultBcg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg }>
           
            <Banner title={`${Translate("Room")} ${Translate(name)}`}>
                    <Link to="/rooms" className="btn btn-primary">{Translate("Back to Rooms")}</Link>
            </Banner>
            </StyledHero>
            <section className="single-room container">
               <div className="row">
                    {defaultBcg.map((item,index) => {
                        return (
                        <div className="col-md-4 col-12 mx-auto" key={index}>
                            <div className="card border-0 shadow-lg">
                               <img key={index} src={item} alt={name} className="img-fluid" />
                            </div>
                        </div>)
                    })}
               </div>
               <div className="single-room-info">
                   <article className="desc">
                      <h3>{Translate("Details")}</h3>
                      <p>{Translate(description)}</p>
                   </article>
                   <article className="info">
                      <h3>{Translate("Info")}</h3>
                      <h6>{Translate("price")} : Rs{price}</h6>
                      <h6>{Translate("size")}  : {size} SQFT</h6>
                      <h6>
                          {Translate("max capacity")} : {" "}
                              {capacity > 1 ? `${capacity} ${Translate("people")}`: `${capacity} ${Translate("person")}`}
                      </h6>
                      <h6>{pets? Translate('pets allowed'): Translate('no pets allowed')}</h6>
                      <h6>{breakfast && Translate("free breakfast included")}</h6>
                   </article>
               </div>
            </section>
            <section className="room-extras">
                <h3>{Translate("Additional features")}</h3>
                <ul className="extras">
                    {extras.map((item,index) => {
                          return <li key={index}>{Translate(item)}</li>
                    })}
                </ul>
                <div className="p-4 clearfix">
                    <div className="row">
                       <div className="col-md-3 col-12 ml-auto">
                          <Link to={`/booknow/${this.state.slug}`} className="btn btn-outline-primary btn-block btn-lg float-right ">{Translate("Book Now")}</Link>
                       </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
