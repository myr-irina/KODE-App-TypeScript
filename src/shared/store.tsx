import React, { ReactNode } from "react";
import { ContactInfo } from "src/types";

import { TimeStamp } from '../types';

interface ContactsStore {
  contacts: { items: ContactInfo[] };
  lastUpdate: TimeStamp;
}

const initialState: ContactsStore = {
  contacts: { items: [] },
  lastUpdate: 0,
};

export const AppContext = React.createContext<
  [ContactsStore, React.Dispatch<React.SetStateAction<ContactsStore>>]
>([initialState, () => {}]);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [contacts, setContacts] = React.useState<ContactsStore>(initialState);

  return (
    <AppContext.Provider value={[contacts, setContacts]}>
      {children}
    </AppContext.Provider>
  );
};
