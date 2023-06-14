import React from 'react'
import BannerImg from "../../assets/Untitled-1.png";
import "./Banner.scss"
import {FaFacebookF, FaPinterestP} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs"
const banner = () => {
  return (
    <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>New Arrivals</h1>
                    <p>
                        Forma Milkway Ivory Chair
                    </p>
                    <div className="ctas">
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                    <div className="social">
                       
                        <FaFacebookF/>
                        <BsInstagram/>
                        <FaPinterestP/>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
  )
}

export default banner