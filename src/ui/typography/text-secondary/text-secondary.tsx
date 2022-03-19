import React from "react";

import textSecondaryStyles from "./text-secondary.module.css";

export const TextSecondary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h1 className={textSecondaryStyles["text-secondary"]}>{children}</h1>;
};
