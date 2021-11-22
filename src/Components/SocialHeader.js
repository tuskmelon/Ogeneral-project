import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Menubar from "./Menubar";
const SocialHeader = () => {
  return (
    <>
    <div className="SocialHeader-Component" style={{backgroundColor:'lightgray'}}>
      <div className="SocialHead-section row p-3 ">
        <div className="Logo col-5 text-left ml-4 mt-4">
          <a href="/" className="" style={{ fontSize: '12px'}}> <FaPhoneAlt /> &nbsp;&nbsp;044-60000729</a>
        </div>
        <div className="Area-details col ">
          <div className="d-flex flex-direction-column justify-content-end mt-1">
          <p className="mr-4 " style={{ fontSize: '25px'}}><FaWhatsapp /></p>
          <p  className="mr-4" style={{ fontSize: '25px'}}><FaFacebook /></p>
          <p  className="mr-4" style={{ fontSize: '25px'}}><FaTwitter /></p>
          <p  className="mr-4" style={{ fontSize: '25px'}}><FaInstagram /></p>
          </div>
        </div>
        <div className="col flex-direction-column mt-2">
            <a href="/" className="  " style={{ color: "red" , fontSize: '20px'}}>Websites</a>
          </div>
    
          <div className="col flex-direction-column">
        
            <p className="mt-3"><FaClock style={{ color: "red" , fontSize: '20px'}} />&nbsp;&nbsp; Open Until 9:00 PM</p>
          </div>
      </div>
    </div>
    </>
  );
};

export default SocialHeader;
