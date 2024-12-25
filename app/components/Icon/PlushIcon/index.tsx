'use client';
import './index.scss'
import clsx from 'clsx'

function PlushIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={clsx('icon_plus', { 'is-open': isOpen })}>
      <span className='icon_plus_ngang'></span>
      {!isOpen && <span className='icon_plus_doc'></span>}
    </div>
  )
}

export default PlushIcon;
