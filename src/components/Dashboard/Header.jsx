"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

const Header = ({ title }) => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div>
      <div className="flex w-full justify-between items-center mb-4">
        <button className="text-primary" onClick={handleBack}>
          <ArrowSquareLeft size={32} />
        </button>
        <h3 className="text-2xl text-primary font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default Header;
