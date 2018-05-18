import React, { Component } from "react";
import { NavBar } from "../assets/js/styled";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
class BarreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar>
          <FontAwesomeIcon icon="coffee" />
        </NavBar>
      </div>
    );
  }
}

export default BarreMenu;