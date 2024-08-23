import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-primary mt-4 flex flex-col mx-auto justify-center items-center">
      <h5 className="py-2 text-2xl font-bold">
        Welcome,{" "}
        <Link href="https://github.com/pandedeva" target="_blank" className="underline">
          {user?.name}
        </Link>
      </h5>
      <Image src={user?.image} width={250} height={250} alt="..." className="rounded-lg" />
      <div className="py-8 flex gap-4 flex-wrap">
        <Link href="/users/dashboard/collection" className="bg-accent text-dark font-bold px-4 py-3 text-xl">
          My Collection
        </Link>
        <Link href="/users/dashboard/comment" className="bg-accent text-dark font-bold px-4 py-3 text-xl">
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
