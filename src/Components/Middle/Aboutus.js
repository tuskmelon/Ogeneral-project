import React from "react";
import { FaTags } from "react-icons/fa";
import { CgAwards } from "react-icons/cg";
import { BsBookmarkStarFill } from "react-icons/bs";
import HouseOperation from "./HoursOperation";

const Aboutus = () => {
  return (
    // <>
    //   <div className="card mt-2">
    //    <div
    //     className="d-flex  bg-white p-3"
    //     style={{ borderBottom: "1px solid black", borderWidth: "1" }}
    //   >
    //     <a
    //       href="/"
    //       className="text-left "
    //       style={{
    //         fontSize: "15px",
    //         fontWeight: "bold",
    //         alignItems: "left",
    //         color: "red",
    //       }}
    //     >
    //       About Us
    //     </a>
    //   </div>

    //   <div className="About-details mt-1 pl-3 pr-3">
    //     <ul className="list-unstyled">
    //       <li className="mt-2"
    //         style={{
    //           fontSize: "12px",
    //           fontWeight: "normal",
    //           alignItems: "left",
    //           color: "black",
    //         }}
    //       >
    //         Fujitsu General has been in the air conditioner business since 1960,
    //         when we introduced our first-generation window-mounted cooler for
    //         home in Japan. In 1971, we started marketing air conditioners in
    //         Kuwait, where outdoor temperature tops 50℃ (122℉) during the day and
    //         a cloud of dust looms over towns. In this challenging environment,
    //         our air conditioners performed as they should have and established
    //         the brand in this Middle Eastern country.
    //       </li>
    //       <li className="mt-2"
    //         style={{
    //           fontSize: "14px",
    //           fontWeight: "normal",
    //           alignItems: "left",
    //           color: "black",
    //         }}
    //       >
    //         <FaTags
    //           style={{
    //             fontSize: "20px",
    //             fontWeight: "normal",
    //             alignItems: "left",
    //             color: "red",
    //           }}
    //         />{" "}
    //         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fujitsu General has been in the air
    //         conditioner business since 1960, when we introduced our
    //         first-generation window-mounted cooler for home in Japan. In 1971,
    //         we started marketing air conditioners in Kuwait, where outdoor
    //         temperature tops 50℃ (122℉) during the day and a cloud of dust looms
    //         over towns. In this challenging environment, our air conditioners
    //         performed as they should have and established the brand in this
    //         Middle Eastern country.
    //       </li>
    //       <li className="mt-2"
    //         style={{
    //           fontSize: "10px",
    //           fontWeight: "normal",
    //           alignItems: "left",
    //           color: "black",
    //         }}
    //       >
    //        {" "}
    //          Awards,Awards, Awards,Awards,,Awards
    //         Awards,Awards,Awards,Awards,Awards,Awards,Awards,
    //         Awards,Awards,Awards,Awards,Awards,Awards,Awards,
    //         Awards,Awards,Awards,Awards,Awards,Awards,Awards,
    //         Awards,Awards,Awards,Awards,Awards
    //       </li>
    //       <li className="mt-2"
    //         style={{
    //           fontSize: "10px",
    //           fontWeight: "normal",
    //           alignItems: "left",
    //           color: "black",
    //         }}
    //       >
    //         <BsBookmarkStarFill
    //           style={{
    //             fontSize: "20px",
    //             fontWeight: "normal",
    //             alignItems: "left",
    //             color: "red",
    //           }}
    //         />{" "}
    //         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //         Started,Started,Starred,Starred,Started,
    //         Starred,Starred,Starred,Started,Starred,Starred
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    // <HouseOperation/>
    // </>
    <>
      <div className="card mt-3 p-3">
        <div
          className="d-flex  bg-white p-3"
          style={{ borderBottom: "1px solid black", borderWidth: "1" }}
        >
          <a
            href="/"
            className="text-left "
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              alignItems: "left",
              color: "red",
            }}
          >
            About Us
          </a>
        </div>
        <div className="det p-3">
          <p
            className="mt-2"
            style={{
              fontSize: "12px",
              fontWeight: "normal",
              alignItems: "left",
              color: "black",
            }}
          >
            Fujitsu General has been in the air conditioner business since 1960,
            when we introduced our first-generation window-mounted cooler for
            home in Japan. In 1971, we started marketing air conditioners in
            Kuwait, where outdoor temperature tops 50℃ (122℉) during the day and
            a cloud of dust looms over towns. In this challenging environment,
            our air conditioners performed as they should have and established
            the brand in this Middle Eastern country.
          </p>
          <div className="d-flex flex-direction-column">
            <FaTags
              className="ml-3 mr-3"
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                alignItems: "left",
                color: "red",
                width: "110%",
              }}
            />
            <p
              className="ml-3 text-uppercase"
              style={{
                fontSize: "12px",
                fontWeight: "normal",
                alignItems: "left",
                color: "black",
              }}
            >
              {" "}
              o general ac, o general ac 1.5 ton price, o general ac 1 ton
              price, o general ac customer care number, o general ac service, o
              general ac 1.5 ton, o general ac remote, o general ac price, o
              general brand origin, o general buy online, o general belongs to
              which country, o general bawa, o general customer care number, o
              general customer care number chennai, o general dealer near me, o
              general distributor, o general dual inverter ac, o general
              electric, o general email id, o general exclusive showroom, o
              general extended warranty, o general em seu labirinto, o general
              free service, o general fridge, o general fujitsu
            </p>
          </div>

          <div className="d-flex flex-direction-column">
            <BsBookmarkStarFill
              className=""
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                alignItems: "left",
                color: "red",
                width: "50%",
              }}
            />
            <p
              className=""
              style={{
                fontSize: "12px",
                fontWeight: "normal",
                alignItems: "left",
                color: "black",
              }}
            >
              {" "}
              Mudhra, Nimah, Anokhi, Rang, Tejasvi, Ziah, Laya, Glo, Candere,
              Vedha, Apoorva, Hera, Muhurat
            </p>
          </div>

          <div className="d-flex flex-direction-column">
            <CgAwards
              className=""
              style={{
                fontSize: "20px",
                fontWeight: "normal",
                alignItems: "left",
                color: "red",
                width: "100%",
              }}
            />
            <p
              className="ml-3"
              style={{
                fontSize: "12px",
                fontWeight: "normal",
                alignItems: "left",
                color: "black",
              }}
            >
              {" "}
              Fujitsu General ,Awards ,Awards ,Awards ,Awards ,Awards ,Awards
              ,Awards ,Awards ,Awards General ,Awards ,Awards ,Awards ,Awards
              ,Awards ,Awards ,Awards ,Awards ,Awards
            </p>
          </div>
        </div>
      </div>
      <HouseOperation />
    </>
  );
};

export default Aboutus;
