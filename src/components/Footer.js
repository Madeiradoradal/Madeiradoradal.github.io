import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { LanguageList } from "react-translator-component";
import { T as Translate } from "react-translator-component";
import developers from '../data/developersData';
import Copyright from "./Copyright";
import item from '../data/contactData';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>{Translate("Get connected with us on social networks:")}</span>
        </div>
        <div className="d-flex float-right">
          <a href={item.facebookLink} target="_blank">
            <FaFacebookSquare className="connect text-dark" />
          </a>
          <a href={item.instagramLink} target="_blank">
            <AiFillInstagram className="connect text-dark" />
          </a>
          <a href={item.tiktokLink} target="_blank">
            <IoLogoYoutube className="connect text-dark" />
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-6">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fa fa-gem me-3"></i>
                {Translate("Madeira Hotel")}
              </h6>
              <p>
                  {Translate("Get away from reality and let yourself be carried away by the magic of nature! 🍃")}
              </p>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-md-0 mb-6">
              <h6 className="text-uppercase fw-bold mb-4">
                {Translate("Contact Us")}
              </h6>
              <p>
                <i className="mx-2 fa fa-home me-3"></i> 
                {item.location}
              </p>
              <p>
                <i className="mx-2 fa fa-envelope me-3"></i>
                <a className="text-reset fw-bold" href={`mailto:${item.emailAddress}`}>
                  {item.emailAddress}
                </a>
              </p>
              <p>
                <i className="mx-2 fa fa-phone me-3"></i> 
                <a className="text-reset fw-bold" href={`tel:${item.countryCode}${item.cellphoneNumber}`}>
                  + {item.countryCode} {item.cellphoneNumber}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
        <LanguageList Theme="Dropdown" />
      <div className="text-center p-4">
        © 2022 Copyright:
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner mxh-30-px mnh-30-px">
            {
                developers.map(item => {
                    debugger
                    return <Copyright key={item.id} link={item.link} name={item.name} first={item.first}/>;
                })
            }
            </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
