import Link from "next/link";
import React from "react";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center text-primary">
      <h1 className="text-2xl py-4 font-bold ">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-lg text-sm underline hover:text-accent transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
