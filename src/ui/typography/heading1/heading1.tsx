import React from "react";

import heading1Styles from "./heading1.module.css";

export const Heading1: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h1 className={heading1Styles.heading1}>{children}</h1>;
};
