import React, { useEffect, useState } from "react";
import "./Timeline.css";
import ExploreButton from "./Explore-button/explore-button";


const IplAuction = "/poster/IPLAuction.png";
const SheSolves = "/poster/SheSolves.png";
const ByteMeCtf = "/poster/Byteme.png";
const CodeRelay = "/poster/CodeRelay.png";
const ActionReplay = "/poster/ActionReplay.png";
const MasterChefUi = "/poster/MasterChefUI.jpg";
const Codigo = "/poster/Codigo.png";
const SherLock = "/poster/Sherlock.png";
const Cat = "/poster/CAT.png";
const InnovateX = "/poster/InnovateX.png";
const BeastGames = "/poster/BeastGames.png";
const CodingOlympics = "/poster/CodingOlympics.png";
const BlindCoding = "/poster/BlindCoding.png";


const rulebookCodigo = "https://drive.google.com/file/d/1-lnMXBjDCLr3dUPiPKc2nY5MFEnTXHrU/view?usp=sharing";
const rulebookSheSolves = "https://drive.google.com/file/d/1zF4C4HjOS35V7GD9aXgAhrO610xe9MM-/view?usp=sharing";
const rulebookBlindCoding = "https://drive.google.com/file/d/14e0cHjgroBCoyr_z9aVRXkh4QCIAg9rY/view?usp=sharing";
const rulebookByteMe = "https://drive.google.com/file/d/1FhqTUgKxWoPB8-UDgsGLo5j1sgdcHRnl/view?usp=sharing";
const rulebookCAT = "https://drive.google.com/file/d/1UMVEUOQfyXJ-I-6w_pBq01T0Wy8jOna2/view?usp=sharing";
const rulebookCodeRelay = "https://drive.google.com/file/d/147ZgcYuLmndBOZT6clVaIJSpVze54CE0/view?usp=sharing";
const rulebookCodingOlympics = "https://drive.google.com/file/d/1SAXF7qdFVzKaoEiRMjN_kInl8ZTpo_wS/view?usp=drive_link";
const rulebookInnovateX = "https://drive.google.com/file/d/1tDSKRNfQv-C_cKnqbx7k74CKzSyLe9pT/view?usp=sharing";
const rulebookMasterChefUI = "https://drive.google.com/file/d/1GX8_DESDkZtXG0KDfeBGEl7BaUZUfWSC/view?usp=sharing";

const rulebookSherlock = "https://drive.google.com/file/d/1D2kMoPAwBVjf4A8rabiWvqC1sbrMx3Pz/view?usp=sharing";
const rulebookIPLAuction = "https://drive.google.com/file/d/1c0OatJR5iS6LAufsOFiIq69ro-aIQwW0/view?usp=sharing";
const rulebookActionReplay = "https://drive.google.com/file/d/10jBYi2aUnENtKqeIbn9eJXY8QKZU-cK2/view?usp=sharing";
const rulebookBeastGames = "https://drive.google.com/file/d/10VObLL05GEny0EWDR3tBuJ2QE5A1TqcG/view?usp=sharing";






const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1); // Normalize between 0 and 1
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <div
        className="line"
        style={{
          background: `linear-gradient(to bottom, red ${
            scrollProgress * 100
          }%, white 0%)`,
        }}
      ></div>

      <div
        className="line"
        style={{
          background: `linear-gradient(to bottom, red ${
            scrollProgress * 100
          }%, white 0%)`,
        }}
      >
        <div
          className="point"
          style={{
            top: "2%",
            backgroundColor: scrollProgress >= 0.02 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "1%" }}>
          <div className="poster-box">
            <div className="poster-box-1">
              <img src={IplAuction} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="IPL AUCTION"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              IPL AUCTION
            </p>
            <p
              className="glitch"
              data-text="ROUND 2"
              style={{ fontSize: "14px" }}
            >
              ROUND 2
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookIPLAuction} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "1.5%" }}>
          <p className="glitch" data-text="06 MARCH 2025">
            06 MARCH 2025
          </p>
          <p className="glitch" data-text="5:00 PM - 7:00 PM">
            5:00 PM - 7:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "5.8%",
            backgroundColor: scrollProgress >= 0.058 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "4.8%" }}>
          <div className="poster-box">
            <div className="poster-box-2">
              <img src={IplAuction} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="IPL AUCTION"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              IPL AUCTION
            </p>
            <p
              className="glitch"
              data-text="ROUND 3"
              style={{ fontSize: "14px" }}
            >
              ROUND 3
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookIPLAuction} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "5.3%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="8:00 AM - 7:00 PM">
            8:00 AM - 7:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "9.6%",
            backgroundColor: scrollProgress >= 0.096 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "8.6%" }}>
          <div className="poster-box">
            <div className="poster-box-3">
              <img src={BlindCoding} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="BLIND CODING"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              BLIND CODING
            </p>
            <p
              className="glitch"
              data-text="ROUND 2"
              style={{ fontSize: "14px" }}
            >
              ROUND 2
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookBlindCoding }/>
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "9.1%" }}>
          <p className="glitch" data-text="06 MARCH 2025">
            06 MARCH 2025
          </p>
          <p className="glitch" data-text="5:00 PM - 7:00 PM">
            5:00 PM - 7:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "13.52%",
            backgroundColor: scrollProgress >= 0.1352 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "12.52%" }}>
          <div className="poster-box">
            <div className="poster-box-4">
              <img src={BlindCoding} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="BLIND CODING"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              BLIND CODING
            </p>
            <p
              className="glitch"
              data-text="ROUND 3"
              style={{ fontSize: "14px" }}
            >
              ROUND 3
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookBlindCoding } />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "13.02%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="8:00 AM - 10:00 AM">
            8:00 AM - 10:00 AM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "17.36%",
            backgroundColor: scrollProgress >= 0.1736 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "16.36%" }}>
          <div className="poster-box">
            <div className="poster-box-5">
              <img src={Cat} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CAT"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              CAT
            </p>
            <p
              className="glitch"
              data-text="ROUND 1"
              style={{ fontSize: "14px" }}
            >
              ROUND 1
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCAT} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "16.84%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="8:00 AM - 10:00 AM">
            8:00 AM - 10:00 AM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "21.2%",
            backgroundColor: scrollProgress >= 0.22 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "20.2%" }}>
          <div className="poster-box">
            <div className="poster-box-6">
              <img src={Cat} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CAT"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              CAT
            </p>
            <p
              className="glitch"
              data-text="ROUND 2"
              style={{ fontSize: "14px" }}
            >
              ROUND 2
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCAT} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "20.7%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="2:00 PM - 4:00 PM">
            2:00 PM - 4:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "25.04%",
            backgroundColor: scrollProgress >= 0.2504 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "24.04%" }}>
          <div className="poster-box">
            <div className="poster-box-7">
              <img src={Cat} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CAT"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              CAT
            </p>
            <p
              className="glitch"
              data-text="ROUND 3"
              style={{ fontSize: "14px" }}
            >
              ROUND 3
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCAT} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "24.54%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="10:00 AM - 12:00 PM">
            10:00 AM - 12:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "28.88%",
            backgroundColor: scrollProgress >= 0.2888 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "27.88%" }}>
          <div className="poster-box">
            <div className="poster-box-8">
              <img src={CodeRelay} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CODE RELAY"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              CODE RELAY
            </p>
            <p
              className="glitch"
              data-text="ROUND 1"
              style={{ fontSize: "14px" }}
            >
              ROUND 1
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCodeRelay} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "28.38%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="9:00 AM - 11:00 AM">
            9:00 AM - 11:00 AM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "32.72%",
            backgroundColor: scrollProgress >= 0.3272 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "31.72%" }}>
          <div className="poster-box">
            <div className="poster-box-9">
              <img src={CodeRelay} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CODE RELAY"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              CODE RELAY
            </p>
            <p
              className="glitch"
              data-text="ROUND 2"
              style={{ fontSize: "14px" }}
            >
              ROUND 2
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCodeRelay} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "32.22%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="2:00 PM - 5:00 PM">
            2:00 PM - 5:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "36.56%",
            backgroundColor: scrollProgress >= 0.3656 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "35.56%" }}>
          <div className="poster-box">
            <div className="poster-box-10">
              <img src={CodeRelay} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CODE RELAY"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              CODE RELAY
            </p>
            <p
              className="glitch"
              data-text="ROUND 3"
              style={{ fontSize: "14px" }}
            >
              ROUND 3
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCodeRelay} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "36.06%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="10:00 AM - 12:00 PM">
            10:00 AM - 12:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "40.4%",
            backgroundColor: scrollProgress >= 0.404 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "39.4%" }}>
          <div className="poster-box">
            <div className="poster-box-11">
              <img src={ActionReplay} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="ACTION REPLAY"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              ACTION REPLAY
            </p>
            <p
              className="glitch"
              data-text="ROUND 2"
              style={{ fontSize: "14px" }}
            >
              ROUND 2
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookActionReplay} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "39.54%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="10:00 AM - 1:00 PM">
            10:00 AM - 1:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "44.24%",
            backgroundColor: scrollProgress >= 0.4424 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "43.24%" }}>
          <div className="poster-box">
            <div className="poster-box-12">
              <img src={ActionReplay} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="ACTION REPLAY"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              ACTION REPLAY
            </p>
            <p
              className="glitch"
              data-text="ROUND 3, 4"
              style={{ fontSize: "14px" }}
            >
              ROUND 3, 4
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookActionReplay} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "43.74%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="10:00 AM - 2:00 PM">
            10:00 AM - 2:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "48.08%",
            backgroundColor: scrollProgress >= 0.4808 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "47.08%" }}>
          <div className="poster-box">
            <div className="poster-box-13">
              <img src={MasterChefUi} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="MASTERCHEF UI"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              MASTERCHEF UI
            </p>
            <p
              className="glitch"
              data-text="ROUND 1"
              style={{ fontSize: "14px" }}
            >
              ROUND 1
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookMasterChefUI} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "47.58%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="10:00 AM - 1:00 PM">
            10:00 AM - 1:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "51.92%",
            backgroundColor: scrollProgress >= 0.5192 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "50.92%" }}>
          <div className="poster-box">
            <div className="poster-box-14">
              <img src={MasterChefUi} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="MASTERCHEF UI"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              MASTERCHEF UI
            </p>
            <p
              className="glitch"
              data-text="ROUND 2"
              style={{ fontSize: "14px" }}
            >
              ROUND 2
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookMasterChefUI} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "51.42%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="4:00 PM - 7:00 PM">
            4:00 PM - 7:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "55.76%",
            backgroundColor: scrollProgress >= 0.5576 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "54.76%" }}>
          <div className="poster-box">
            <div className="poster-box-15">
              <img src={MasterChefUi} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="MASTERCHEF UI"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              MASTERCHEF UI
            </p>
            <p
              className="glitch"
              data-text="ROUND 3"
              style={{ fontSize: "14px" }}
            >
              ROUND 3
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookMasterChefUI} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "55.26%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="12:00 PM - 2:00 PM">
            12:00 PM - 2:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "59.6%",
            backgroundColor: scrollProgress >= 0.596 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "58.6%" }}>
          <div className="poster-box">
            <div className="poster-box-16">
              <img src={ByteMeCtf} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="BYTE ME"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              BYTE ME
            </p>
            <p
              className="glitch"
              data-text="ROUND 1"
              style={{ fontSize: "14px" }}
            >
              ROUND 1
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookByteMe} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "59.1%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="11:00 AM - 1:00 PM">
            11:00 AM - 1:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "63.44%",
            backgroundColor: scrollProgress >= 0.6344 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "62.44%" }}>
          <div className="poster-box">
            <div className="poster-box-17">
              <img src={ByteMeCtf} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="BYTE ME"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              BYTE ME
            </p>
            <p
              className="glitch"
              data-text="ROUND 2"
              style={{ fontSize: "14px" }}
            >
              ROUND 2
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookByteMe} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "62.94%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="3:00 PM - 7:00 PM">
            3:00 PM - 7:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "67.28%",
            backgroundColor: scrollProgress >= 0.6728 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "66.28%" }}>
          <div className="poster-box">
            <div className="poster-box-18">
              <img src={CodingOlympics} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CODING OLYMPICS"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              CODING OLYMPICS
            </p>
            <p
              className="glitch"
              data-text="ROUND 1"
              style={{ fontSize: "14px" }}
            >
              ROUND 1
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCodingOlympics} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "66.78%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="2:00 PM - 4:00 PM">
            2:00 PM - 4:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "71.12%",
            backgroundColor: scrollProgress >= 0.7112 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "70.12%" }}>
          <div className="poster-box">
            <div className="poster-box-19">
              <img src={CodingOlympics} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CODING OLYMPICS"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              CODING OLYMPICS
            </p>
            <p
              className="glitch"
              data-text="ROUND 2"
              style={{ fontSize: "14px" }}
            >
              ROUND 2
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCodingOlympics} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "70.62%" }}>
          <p className="glitch" data-text="07 MARCH 2025">
            07 MARCH 2025
          </p>
          <p className="glitch" data-text="4:00 PM - 6:00 PM">
            4:00 PM - 6:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "74.96%",
            backgroundColor: scrollProgress >= 0.7496 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "73.96%" }}>
          <div className="poster-box">
            <div className="poster-box-20">
              <img src={CodingOlympics} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CODING OLYMPICS"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              CODING OLYMPICS
            </p>
            <p
              className="glitch"
              data-text="ROUND 3"
              style={{ fontSize: "14px" }}
            >
              ROUND 3
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCodingOlympics} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "74.46%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="8:00 AM - 10:00 AM">
            8:00 AM - 10:00 AM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "78.88%",
            backgroundColor: scrollProgress >= 0.7888 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "77.88%" }}>
          <div className="poster-box">
            <div className="poster-box-21">
              <img src={InnovateX} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="INNOVATE X"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              INNOVATE X
            </p>
            <p
              className="glitch"
              data-text="ROUND 1"
              style={{ fontSize: "14px" }}
            >
              ROUND 1
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={InnovateX} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "78.38%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="9:00 AM - 1:00 PM">
            9:00 AM - 1:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "82.64%",
            backgroundColor: scrollProgress >= 0.8264 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "81.64%" }}>
          <div className="poster-box">
            <div className="poster-box-22">
              <img src={SheSolves} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="SHE SOLVES"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              SHE SOLVES
            </p>
            <p
              className="glitch"
              data-text="ROUND 1"
              style={{ fontSize: "14px" }}
            >
              ROUND 1
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookSheSolves} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "82.14%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="8:00 AM - 2:00 PM">
            8:00 AM - 2:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "86.48%",
            backgroundColor: scrollProgress >= 0.8648 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "85.48%" }}>
          <div className="poster-box">
            <div className="poster-box-23">
              <img src={SherLock} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="SHERLOCK"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              SHERLOCK
            </p>
            <p
              className="glitch"
              data-text="ROUND 2, 3"
              style={{ fontSize: "14px" }}
            >
              ROUND 2, 3
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookSherlock} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "85.98%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="8:00 AM - 1:00 PM">
            8:00 AM - 1:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "90.32%",
            backgroundColor: scrollProgress >= 0.9032 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "89.32%" }}>
          <div className="poster-box">
            <div className="poster-box-24">
              <img src={Codigo} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CODIGO"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              CODIGO
            </p>
            <p
              className="glitch"
              data-text="ROUND 2"
              style={{ fontSize: "14px" }}
            >
              ROUND 2
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCodigo} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "89.82%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="10:00 AM - 12:00 PM">
            10:00 AM - 12:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "94.16%",
            backgroundColor: scrollProgress >= 0.9416 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "93.16%" }}>
          <div className="poster-box">
            <div className="poster-box-25">
              <img src={Codigo} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="CODIGO"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              CODIGO
            </p>
            <p
              className="glitch"
              data-text="ROUND 3"
              style={{ fontSize: "14px" }}
            >
              ROUND 3
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookCodigo} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "93.66%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="12:00 PM - 2:00 PM">
            12:00 PM - 2:00 PM
          </p>
        </div>

        <div
          className="point"
          style={{
            top: "98%",
            backgroundColor: scrollProgress >= 0.98 ? "red" : "white",
          }}
        ></div>
        <div className="container" style={{ top: "97%" }}>
          <div className="poster-box">
            <div className="poster-box-25">
              <img src={BeastGames} alt="Event Poster" />
            </div>
          </div>
          <div className="event-name-box">
            <p
              className="glitch"
              data-text="BEAST GAMES"
              style={{ fontSize: "27px", fontWeight: "bold" }}
            >
              BEAST GAMES
            </p>
            <p
              className="glitch"
              data-text="ROUND 1"
              style={{ fontSize: "14px" }}
            >
              ROUND 1
            </p>
            <div className="explore">
              <ExploreButton rulebookLink={rulebookBeastGames} />
            </div>
          </div>
        </div>
        <div className="date-box" style={{ top: "97.5%" }}>
          <p className="glitch" data-text="08 MARCH 2025">
            08 MARCH 2025
          </p>
          <p className="glitch" data-text="8:00 AM - 4:00 PM">
            8:00 AM - 4:00 PM
          </p>
        </div>
      </div>

      <div
        className="line"
        style={{
          background: `linear-gradient(to bottom, red ${
            scrollProgress * 100
          }%, white 0%)`,
        }}
      ></div>
    </div>
  );
};

export default Timeline;
