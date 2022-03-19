import React from "react";

import textPrimaryStyles from "./text-primary.module.css";

export const TextPrimary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className={textPrimaryStyles["text-primary"]}>{children}</p>;
};
