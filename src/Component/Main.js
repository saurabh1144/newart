import React from "react";
import log from "../Assests/logo.png";
import trophy from "../Assests/1.png";
import group from "../Assests/2.png";
import quip from '../Assests/3.png'
import { CiPhone } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";

function Main() {
  return (
    <div className="container">
      <div className="logo">
        <img src={log} alt="banner" />
      </div>

      <div className="main">
        <div className="trophy">
          <img src={trophy} alt="group" />
        </div>
        <div className="group">
          <h5>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h5>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              {" "}
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={group} />
          <label>
            Government of India has awarded the  <b>"National Energy Conservation
            Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </label>
        </div>
      </div>
      <div className="head">
        <label>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</label>
      </div>

      <div className="equip">
        <img src={quip}/>
        
      </div>
      <label className="names">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </label>
      <span style={{ display: 'block', borderBottom: '2px solid red' }}></span>

 <div className="last">
 <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>

 </div>
 <label className="las">CHEMICALS & PROCESS <span style={{color:'red'}}>|</span> POWER <span style={{color:'red'}}>|</span> WATER & WASTE WATER <span style={{color:'red'}}>|</span> OILS & GAS <span style={{color:'red'}}>|</span> PHARMA 
 <span style={{color:'red'}}>|</span>SUGARS & DISTILLERIES <span style={{color:'red'}}>|</span> PAPER & PULP   <span style={{color:'red'}}>|</span> MARINE & DEFENCE  <span style={{color:'red'}}>|</span> METAL & MINING  <span style={{color:'red'}}>|</span> FOOD & BEVERAGE  <span style={{color:'red'}}>|</span></label>
 <label className="lass"> PETROCHEMICAL & REFINERIES  <span style={{color:'red'}}>|</span> SOLAR  <span style={{color:'red'}}>|</span> BUILDING  <span style={{color:'red'}}>|</span>HVAC  <span style={{color:'red'}}>|</span> FIRE FIGHTING  <span style={{color:'red'}}>|</span> AGRICULTURE & RESIDENTIAL</label>
    
    <div className="footer">
    <div className="phone">
    <label><CiPhone />180075536</label>
    </div>

    <div className="facebook">
    <label><CiFacebook />www.facebook.com/cripumps</label>
    </div>

    <div className="web">
    <label><CiGlobe />www.crigroups.com</label>
    </div>
    
    </div>
    </div>
  );
}

export default Main;
