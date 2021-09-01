import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "../routes";

export default class MenuExample extends Component {
  state = { activeItem: "crowdcoin" };
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu style={{ marginTop: "10px" }}>
        <Link route="/">
          <a className="item">CrowdCoin</a>
        </Link>

        <Menu.Menu position="right">
          <Link route="/">
            <a className="item">Campaigns</a>
          </Link>
          <Link route="/campaigns/new">
            <a className="item">+</a>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}
