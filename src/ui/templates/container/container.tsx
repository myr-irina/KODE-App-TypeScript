import React from "react";

import containerStyles from "./container.module.css";

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>;
};
