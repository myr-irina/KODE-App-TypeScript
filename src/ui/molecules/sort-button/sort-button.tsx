import React from 'react'

import { IconSort } from 'src/ui/atoms/icon-sort/icon-sort'

import sortButtonStyles from './sort-button.module.css'

interface Button {
  isActive: boolean,
  onSortButtonClicked: () => void,
}

export const SortButton: React.FC<Button> = ({ isActive = false, onSortButtonClicked }) => {

  return (
    <button className={sortButtonStyles.sortButton} onClick={onSortButtonClicked}>
      <IconSort isActive={isActive} />
    </button>
  )
}