import React from 'react'

import skeletonItemStyles from './contact-item-skeleton.module.css'

export const ContactItemSkeleton: React.FC = () => {
  return (
    <div className={skeletonItemStyles['contact-item-skeleton-wrapper']}>
      <div className={skeletonItemStyles['contact-item-skeleton-avatar']} />
      <div>
        <div className={skeletonItemStyles['contact-item-skeleton-title']} />
        <div className={skeletonItemStyles['contact-item-skeleton-subtitle']} />
      </div>
    </div>
  )
}
