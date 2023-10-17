import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Introbox.css";

import axios from "axios";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Introbox = () => {

  document.title="HomePage | ProjectTree"
  const [websiteData, setWebsiteData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://127.0.0.1:8000")
        .then((data) => setWebsiteData(data.data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="introbox">
        <Zoom cascade>
          <div className="frontbox">
            <div className="center">
              <div className="leftbox">
                <h1>
                  Learn. Build. <br />
                  Share.{" "}
                </h1>
                <p>
                  ProjectTree is a platform where you can share <br /> your open
                  source projects with the world.
                </p>
                <Link to="/projects">Browse Projects</Link>
              </div>
            </div>
            <div className="container">
              <div className="rightbox">
                <div className="leftcontainer photobox">
                  <div id="img1" className="firstimage imagediv"></div>
                  <div id="img2" className="firstimage imagediv"></div>
                </div>
                <div className="middlecontainer photobox">
                  <div id="img3" className="firstimage imagediv"></div>
                  <div id="img4" className="firstimage imagediv"></div>
                  <div id="img5" className="firstimage imagediv"></div>
                </div>
                <div className="rightcontainer photobox">
                  <div id="img6" className="firstimage imagediv"></div>
                  <div id="img7" className="firstimage imagediv"></div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </section>
      <section className="information">
        <div className="info">
          <h3>Showcase your projects</h3>
          <h1>Why should you use this?</h1>
        </div>
        <Fade left>
          <div className="infocontainer">
            <div className="infobox">
              <h1>Add GitHub link</h1>
              <h3>You can add your GitHub repository link to your profile.</h3>
            </div>
            <div className="infobox">
              <h1>Share your profile</h1>
              <h3>Share your profile with your friends and colleagues.</h3>
            </div>
            <div className="infobox">
              <h1>Open Source</h1>
              <h3>This project is open source and you can contribute to it.</h3>
            </div>
            <div className="infobox">
              <h1>Free to use</h1>
              <h3>
                This project is free to use and you don't have to pay anything.
              </h3>
            </div>
          </div>
        </Fade>
        <Fade right>
          <section className="stats">
            <h1>Our Stats</h1>
            <div className="statsbox">
              <div className="stats-box">
                <h1>Website Visits</h1>
                <h4>{websiteData.totalVisites || "NaN"}</h4>
              </div>
              <div className="stats-box">
                <h1>Projects</h1>
                <h4>{websiteData.totalProjects || "NaN"}</h4>
              </div>
              <div className="stats-box">
                <h1>Users</h1>
                <h4>{websiteData.totalUsers || "NaN"}</h4>
              </div>
            </div>
          </section>
        </Fade>
      </section>
    </>
  );
};

export default Introbox;
