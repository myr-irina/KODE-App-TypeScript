import React from "react";

import { Container } from "src/ui/templates";
import { ContactItemSkeleton } from "src/ui/molecules";

interface Skeleton {
  amount: number;
}

export const ContactListSkeleton: React.FC<Skeleton> = ({ amount = 6 }) => {
  const list = new Array(amount).fill(amount);

  return (
    <Container>
      {list.map((_, index) => (
        <ContactItemSkeleton key={index} />
      ))}
    </Container>
  );
};
