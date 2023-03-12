import React, { Component } from "react";
import communityImage from "./images/community.png";
import "./App.css";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "me@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="App" align = "right">
        {/* <img src={logo} className="logo" alt="empowerHer" /> */}
        <p>Welcome!</p>
        <div className="welcome">
          We're glad to have you here! Time to get started on your journey to gaining new skills and advancing your career in an empowering and supporting environment for future female leaders to thrive in tech.
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input type="firstName" name="firstName" placeholder="First Name" />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" name="lastName" placeholder="Last Name" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="name@email.com" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary" onClick={this.handleClick}>
            Register
          </button>
          <div>
            <h2><span>Or Continue With</span></h2>
          </div>
          <div class="button-container" onClick={this.handleClick}>
            <button className="b1">
              <FontAwesomeIcon icon="fa-brands fa-google" />
              Google
            </button>
            <button className="b2">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              LinkedIn
            </button>
            <button className="b3">
              <FontAwesomeIcon icon="fa-brands fa-github" />
              GitHub
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;