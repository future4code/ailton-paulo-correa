import React, { Component } from "react";
import styled from "styled-components";
import logoInstagram from "../../img/instagram.png";
import logoFacebook from "../../img/facebook.png";
import logoTwitter from "../../img/twitter.png";

const SharedContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: center;
  padding: 5px;
`;
const Logo = styled.img`
  height: 40px;
  cursor: pointer;
  &:hover,
  &:active {
    border-radius: 8px;
    box-shadow: 0 0 12px 4px gray;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
`;

export class SecaoCompartilhar extends Component {
  render() {
    return (
      <SharedContainer>
        <LogoContainer>
          <Logo src={logoInstagram} onClick={this.props.instagram} />
          <Logo src={logoFacebook} onClick={this.props.facebook} />
          <Logo src={logoTwitter} onClick={this.props.twitter} />
        </LogoContainer>
      </SharedContainer>
    );
  }
}
