import React from "react";
import "./GlobalStyle.scss";

interface GlobalStyleProps {
  children: React.ReactNode;
}
const GlobalStyle = ({ children }: GlobalStyleProps) => {
  return <div>{children}</div>
};

export default GlobalStyle;
