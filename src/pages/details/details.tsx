import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AppContext } from "src/shared/store";

export const Details: React.FC = () => {
  const navigate = useNavigate();
  const { contactId } = useParams() as any;
  const [{ contacts }] = React.useContext(AppContext);

  const contactInfo = contacts.items.find(
    (contact) => contact.id === contactId
  );

  return (
    <div>
      <button onClick={() => navigate("/")}>назад</button>
      <div>{JSON.stringify(contactInfo)}</div>
    </div>
  );
};
