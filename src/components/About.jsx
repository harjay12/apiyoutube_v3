import React, { Component } from "react";

import { Image, Jumbotron } from "react-bootstrap";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h2 style={{ textAlign: "center" }}>About Us</h2>
        </Jumbotron>
        <div class="ui internally celled  grid">
          <div class="row">
            <div class="three wide column">
              <Image src="/harj.jpeg" roundedCircle />
              <p>
                BSU's Undergrad Student Computer Science's Major with a Minor in
                Applied Math Jean Saint Aime
              </p>
            </div>
            <div class="thirteen wide column">
              <p></p>
            </div>
          </div>
          <div class="row">
            <div class="three wide column">
              <Image src="/Dan.jpg" roundedCircle />
              <p>
                BSU's Undergrad Student Computer Science's Major Rayan Dan-Salah
                Shardow-Suberu
              </p>
            </div>
            <div class="ten wide column">
              <p></p>
            </div>
            <div class="three wide column">
              <Image src="/josh.jpg" roundedCircle />
              <p>BSU's Undergrad Student Computer Science's Major Josh Lopes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
