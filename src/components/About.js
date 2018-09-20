import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="about-content">
          <h6>ABOUT ME</h6>
          <hr style={{ color: "#8590aa" }} />
          <p>
            I have been embedded with agile development teams for 5 years. I
            have been a Product Manager for all of those years. Working
            alongside developers has picqued my passion for coding so I enrolled
            in a full stack javascript bootcamp and got to coding. I <u>LOVE</u>{" "}
            it and want to join a fun and energetic dev team.
          </p>

          <div className="hire-me">
            <p>
              {" "}
              <u>Reasons why you should hire me:</u>
            </p>

            <ul>
              <li>
                I have been embedded with agile development teams for 5 years.
              </li>
              <li>I regularly make product and design-related decisions.</li>

              <li>
                I can write requirements, test plans, and product documentation.
              </li>
              <li>
                I understand good process. I hold an MBA and am a Certified
                ScrumMaster and Certified Scrum Product Owner.{" "}
              </li>
              <li>
                I'm nice and fun and work well with others (check out my
                recommendations on{" "}
                <a href="https://www.linkedin.com/in/lesleysab/" target="blank">
                  LinkedIn
                </a>
                ).
              </li>
              <li>
                I speak the language. I successfully completed a 30-week
                FullStack JavaScript Bootcamp.
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
