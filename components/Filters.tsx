"use client";

import React from 'react'

const links = ["all", "Next 13", "Frontend", "Backend", "Fullstack"]

const Filters = () => {
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => {}}
          className="whitespace-nowrap rounded-lg px-8 py-2.5 capitalize"
        >
          {link}
        </button>
      ))}
    </ul>
  )
}

export default Filters