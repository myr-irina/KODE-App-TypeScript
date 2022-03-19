import React from "react";

import textSmallStyles from "./text-small.module.css";

export const TextSmall: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h1 className={textSmallStyles["text-small"]}>{children}</h1>;
};
