import React from "react";

import Fade from "react-reveal/Fade";

import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Fade bottom>
        <div className="fbox footerinfo">
          <h1>ProjectTree</h1>
          <h4>
            ProjectTree is an open source web app that enables users to freely
            publish their projects and create user profiles within the platform
          </h4>
          <div className="social">
            <a href="https://www.instagram.com/itsbishalde/" target="_blank">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </a>
            <a href="https://www.linkedin.com/in/bishalde/" target="_blank">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a href="https://github.com/bishalde/ProjectTree" target="_blank">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/github--v1.png"
                alt="github--v1"
              />
            </a>
          </div>
        </div>
        <div className="fbox footercompany">
          <h2>@ProjectTree 2023 All rights reserved</h2>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
