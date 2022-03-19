import React from 'react'

import contactItemStyles from './contact-item.module.css'

import { ContactPic } from 'src/ui/atoms';
import { TextPrimary, TextSecondary, TextSmall } from 'src/ui/typography';

import {ContactInfo} from '../../../types';

type Props = {
  contactInfo: ContactInfo,
  onItemClick: (id: number) => void;
}

export const ContactItem:React.FC<Props> = ({ contactInfo, onItemClick }) => {
  return (
    <div className={contactItemStyles.wrapper} onClick={() => onItemClick(contactInfo.id)}>
      <ContactPic avatarUrl={contactInfo.avatarUrl} id={0} firstName={''} lastName={''} userTag={''} position={''} />
      <div className={contactItemStyles['caption-wrapper']}>
        <div className={contactItemStyles['heading-wrapper']}>
          <TextPrimary>{contactInfo.firstName} {contactInfo.lastName}</TextPrimary>
          <div style={{ width: 8 }} />
          <TextSecondary>{contactInfo.userTag.toLowerCase()}</TextSecondary>
        </div>
        <TextSmall>{contactInfo.position}</TextSmall>
      </div>
    </div>
  )
}
