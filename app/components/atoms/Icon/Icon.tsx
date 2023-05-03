import React from "react";
import { GithubIconWrapper, GoogleIconWrapper } from "./styles";

export interface IconProps {
  icon: "google" | "github";
  iconSize?: "l" | "m" | "s";
}

const Icon: React.FC<IconProps> = ({ icon, iconSize }) => {
  return (
    <>
      {
        icon === "google" ? <GoogleIconWrapper iconSize={iconSize} /> : 
        icon === "github" ? <GithubIconWrapper iconSize={iconSize} /> : null
      }
    </>
  );
};

export default Icon;