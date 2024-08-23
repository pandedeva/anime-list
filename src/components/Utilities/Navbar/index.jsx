import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";
import UserActionButton from "../UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-accent">
      <div className="flex md:flex-row flex-col justify-between container p-4 mx-auto gap-2 md:items-center">
        <Link className="font-bold text-3xl text-dark" href="/">
          ANIMEWIBULIST
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
