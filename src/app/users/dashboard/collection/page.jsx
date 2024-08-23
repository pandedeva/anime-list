import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSession();

  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 container mx-auto mb-10">
      <Header title={"My Collection"} />
      {!collection.length ? (
        <div className="text-2xl text-primary uppercase min-h-screen flex justify-center items-center font-bold">❌ tidak ada koleksi</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collection.map((collect, index) => {
            return (
              <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative group">
                <Image src={collect.anime_image} className="rounded-lg group-hover:opacity-90" alt={collect.anime_image} width={350} height={350} />
                <div className="w-full bg-accent h-16 absolute bottom-0 flex justify-center items-center rounded-b-lg">
                  <h5 className="text-xl text-center">{collect.anime_title}</h5>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Page;
