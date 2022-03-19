import React from 'react'

import noContactsStyles from './empty-contact-list.module.css'
import pic from './search.png'

export const EmptyContactList: React.FC = () => {
  return (
    <div className={noContactsStyles.wrapper}>
      <img src={pic} alt="no-data" className={noContactsStyles.img} width={56} height={56} />
      <p className={noContactsStyles.title}>Мы никого не нашли</p>
      <p className={noContactsStyles.caption}>Попробуй скорректировать запрос</p>
    </div>
  )
}
