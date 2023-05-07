import React from "react";
import { GithubIconWrapper, GoogleIconWrapper, LeftIconWrapper } from "./styles";

interface IconProps {
  icon?: "left" | "google" | "github";
  iconSize?: "l" | "m" | "s";
}

const Icon: React.FC<IconProps> = ({ icon, iconSize }) => {
  return (
    <>
      {
        icon === "google" ? <GoogleIconWrapper iconSize={iconSize} /> : 
        icon === "github" ? <GithubIconWrapper iconSize={iconSize} /> :
        icon === "left" ? <LeftIconWrapper iconSize={iconSize} /> : null
      }
    </>
  );
};

export default Icon;