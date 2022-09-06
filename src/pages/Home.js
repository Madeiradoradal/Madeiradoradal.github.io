import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Translate from '../helpers/locale/translator';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero"></Hero>
        <Banner title={Translate("Luxurious Rooms")} subtitle={Translate(["deluxe rooms starting at", "300$"])}>
                <Link to="/rooms" className="btn btn-primary">
                      {Translate("Our Rooms")}
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        </>

    )
}
