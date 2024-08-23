"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    if (!searchRef.current.value || searchRef.current.value.trim() === "") return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${searchRef.current.value}`);
    }
  };

  return (
    <div className="relative">
      <input placeholder="cari anime..." className="p-2 rounded w-full" ref={searchRef} onKeyDown={handleSearch} />

      <button className="absolute top-2 right-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
