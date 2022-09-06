import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

export default function Team({ member}) {
    const { picture , position , job, experience, facebook, instagram, linkedin, youtube  } = member;
    return (
        <div className="col-md-4 col-12 mx-auto my-2">
            <div className="card border-0 shadow-lg p-4">
                <img src={picture} className="card-img-top" alt={position} />
                <div className="card-body">
                    <h5 className="card-title mb-0">{position}</h5>
                    <div className="card-text text-black-50">{job} <p className="float-right">{experience}</p>
                    </div>
                    <h6 className="mt-5">CONNECT</h6>
                    <div className="d-flex justify-content-around">
                        <a href={facebook} target="_blank" className='text-dark'>
                            <FaFacebookSquare className="connect" />
                        </a>
                        <a href={instagram} target="_blank" className='text-dark'>
                            <AiFillInstagram className="connect" />
                        </a>
                        <a href={linkedin} target="_blank" className='text-dark'>
                            <FaLinkedin className="connect" />
                        </a>
                        <a href={youtube} target="_blank" className='text-dark'>
                            <IoLogoYoutube className="connect" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
