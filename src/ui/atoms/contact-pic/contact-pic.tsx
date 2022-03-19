import React from "react";

import contactPicStyle from "./contact-pic.module.css";

import { ContactInfo } from "src/types";

export const ContactPic: React.FC<ContactInfo> = ({ avatarUrl }) => {
  return (
    <div className={contactPicStyle["contact-pic-wrapper"]}>
      <img src={avatarUrl} alt="contact" className={contactPicStyle.img} />
    </div>
  );
};
