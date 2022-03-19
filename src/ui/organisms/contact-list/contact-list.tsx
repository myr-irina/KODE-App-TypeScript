import React from 'react'

import { Container } from 'src/ui/templates'
import { ContactItem } from 'src/ui/molecules'

import {ContactInfo} from '../../../types';

interface Contacts {
  contacts: ContactInfo[],
  onItemClick: (onItemClick: number) => void,
}

export const ContactList: React.FC<Contacts> = ({ contacts, onItemClick }) => {
  return (
    <Container>
      {contacts.map((contact) => <ContactItem contactInfo={contact} key={contact.id} onItemClick={onItemClick} /> )}
    </Container>
  )
}
