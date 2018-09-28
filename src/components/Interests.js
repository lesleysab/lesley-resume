import React, { Component } from "react";
import Pdf from "../Lesley Sablatura_2018_09_no address.pdf";

class Interests extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="interests-wrapper">
          <div className="interests">
            <h4> INTERESTS</h4>
            <hr />
            <p>
              <strong>DOGS & VOLUNTEERING.</strong> I have 2 rescue pups and
              have fostered countless dogs over the years. I'm on the board of
              BARKITECTURE ATX as a web developer. It's a custom doghouse design
              show and contest by local builder, architect and design teams.
              Check out the{" "}
              <a href="https://barkitectureatx.com/" target="blank">
                website
              </a>{" "}
              and{" "}
              <a
                href="https://desolate-hamlet-12192.herokuapp.com/"
                target="blank"
              >
                bidding app
              </a>{" "}
              I built for the organization. You can find more of my work{" "}
              <a href="https://github.com/lesleysab" target="blank">
                here
              </a>
              .{" "}
            </p>
            <p>
              <strong>ALWAYS BE LEARNING. </strong>
              You can{" "}
              <a href={Pdf} target="blank">
                see{" "}
              </a>
              I have lots of degrees and certifications. I love to learn and is
              a primary reason why I love working for software companies. I am
              always reading, practicing, researching in order to be proficient
              with the latest and greatest.
            </p>
            <p>
              <strong>THE GREAT OUTDOORS.</strong>
              Nature is the best medicine. From hiking to running to
              cartwheeling down a trail, I find it to be the best place to be on
              earth.{" "}
              <a
                href="https://photos.app.goo.gl/eWNq7xqjUy73e1M58"
                target="blank"
              >
                Check out my hike up Mount Kilimanjaro in Tanzania last year
              </a>
              .
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Interests;
