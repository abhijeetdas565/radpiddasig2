import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.scss";
import Dropdown from "./Dropdown";
import Logo from "../../assets/logo.jpeg";

const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <div className="left">
            <img className="banner-img" src={Logo} />
            MAYNOOTH
          </div>
          <ul className="center">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li
                className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Our Offer
                </Link>
                {dropdown && <Dropdown />}
              </li>
            </ul>

            <li>Bedroom</li>
            <li>Kitchen & Dining</li>
          </ul>
          <div className="right">
            <TbSearch />
            <BsCart />
            <AiOutlineUser />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
