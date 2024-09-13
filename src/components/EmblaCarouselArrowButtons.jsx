import React from 'react'

export const Thumb = ({ selected, onClick, children }) => {
  return (
    <div onClick={onClick} className={`embla__thumb ${selected ? "is-selected" : ""}`}>
      {children}
    </div>
  )
};
