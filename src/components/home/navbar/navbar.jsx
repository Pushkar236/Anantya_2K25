import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import img from "./../../../../public/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <title>Anantya</title>
      <header className="heads ">
        <div className="navbar" style={{ marginBottom: '20px' }}>
          <div className="logo">
            <a href="">
              <div className="nav-logo ">
               <img src={img} alt="" className="max-w-[140px] mt-3 " />

              </div>
              {/* <span className="logo-text" onClick={() => navigate("/")}>Anantya</span> */}
            </a>
          </div>
          <ul className="links ">
            <li><a href="#" data-text="Home" className="glitch" onClick={() => navigate("/")}>Home</a></li>
            <li><a href="#" data-text="Events" className="glitch" onClick={() => navigate("/events")}>Events</a></li>
            <li><a href="#" data-text="Gallery" className="glitch" onClick={() => navigate("/gallery")}>Gallery</a></li>
            <li><a href="#" data-text="Calender" className="glitch" onClick={() => navigate("/calender")}>Calender</a></li>
            <li><a href="#" data-text="Team" className="glitch" onClick={() => navigate("/team")}>Team</a></li>
          </ul>
          <div className="toggle_btn" onClick={toggleMenu}>
            <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </div>
        </div>

        <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
          <li><a href="#" data-text="Home" className="glitch" onClick={() => navigate("/")}>Home</a></li>
          <li><a href="#" data-text="Events" className="glitch" onClick={() => navigate("/events")}>Events</a></li>
          <li><a href="#" data-text="Gallery" className="glitch" onClick={() => navigate("/gallery")}>Gallery</a></li>
          <li><a href="#" data-text="Calender" className="glitch" onClick={() => navigate("/calender")}>Calender</a></li>
          <li><a href="#" data-text="Team" className="glitch" onClick={() => navigate("/team")}>Team</a></li>
        </div>
      </header>
    </>
  );
}

export default Navbar;