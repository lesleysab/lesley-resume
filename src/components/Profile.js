import React, { Component } from "react";
import Lesley from "/Users/lesleysablatura/Desktop/lesley-resume/src/Lesley.jpg";

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="profile">
          <div className="profile-image">
            <img src={Lesley} alt={"Lesley"} />
          </div>
          <div className="profile-name">
            <h5>Lesley Sablatura</h5>
            <hr style={{ color: "#8590aa" }} />
            <p>
              Real-Life Product Manager
              <br />
              Wanna-Be Software Engineer in Austin, Texas
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
