"use client";

import { formUrlQuery } from "@/sanity/utils";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from 'react'

const links = ["all", "Next 13", "Frontend", "Backend", "Fullstack"]

const Filters = () => {
  const [active, setActive] = useState("");

  const searchParams = useSearchParams();

  const handleFilter = (link: string) => {
    let newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "category",
      value: null,
    })

    setActive(link);
  }

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => {handleFilter(link)}}
          className={`${active === link ? 'gradient_blue-purple' : ""} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  )
}

export default Filters