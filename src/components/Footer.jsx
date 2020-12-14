import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faGooglePlusG,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer class="page-footer font-small special-color-dark ">
        <div class=" ui container">
          <ul class="list-unstyled list-inline text-center">
            <li class="list-inline-item">
              <a href="https://www.youtube.com" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://www.linkedin.com/in/saintaime/"
                className="linkedin social"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://www.google.com"
                className=" google social gplus-ic"
              >
                <FontAwesomeIcon icon={faGooglePlusG} size="2x" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://github.com/harjay12/apiyoutube_v3"
                className=" github social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-copyright text-center py-1">
          &copy; {new Date().getFullYear()} Copyright: All right reserved |{" "}
          <a href="/">Terms Of Service</a> |<a href="/"> Privacy</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
