import * as React from "react";

import { CSSProperties, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const Button = ({ children }: PropsType) => {
  const buttonStyle: CSSProperties = {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "background-color 0.3s, color 0.3s",
    backgroundColor: "var(--button-bg)",
    color: "var(--button-text)",
  };

  return <button style={buttonStyle}>{children}</button>;
};

export default Button;
