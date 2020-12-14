import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "./Contact.css";
import emailjs from "emailjs-com";

class Contacts extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h2 style={{ textAlign: "center" }}>Contact Us</h2>
        </Jumbotron>
        <div className="containerItems">
          <div className="icon">
            <i class="fas fa-envelope-open-text fa-3x"></i>
          </div>
          <form className="rightScaleItem" onSubmit={this.sendEmail}>
            <h1> Contact Us </h1>

            <label>First Name</label>
            <input
              className="input"
              type="text"
              placeholder="First Name*"
              name="First Name"
              required
            />
            <label>Last Name</label>
            <input
              className="input"
              type="text"
              placeholder="Last Name*"
              name="Last Name"
              required
            />
            <label>Email </label>
            <input
              className="input"
              type="email"
              placeholder="Email*"
              name="Email"
              required
            />
            <label>Message: </label>
            <textarea
              className="textarea"
              placeholder="What's on your mind:"
              name="message"
            ></textarea>

            <button
              className="ui button"
              style={{
                margin: "10px",
                textAlign: "center",
                backgroundColor: "green",
                color: "white",
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_zyu8ypp",
        e.target,
        "user_4GrZIaID8OZWqLLNvn1Ge"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
}

export default Contacts;
