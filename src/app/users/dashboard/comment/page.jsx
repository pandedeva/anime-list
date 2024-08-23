import DeleteButton from "@/components/Comment/DeleteButton";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="container mx-auto px-4 mt-4">
      <Header title={"My Comments"} />
      {!comments.length ? (
        <div className="text-2xl text-primary uppercase min-h-screen flex justify-center items-center font-bold">❌ tidak ada komentar</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 ">
          {comments.map((comment) => {
            return (
              <>
                <div key={comment.id} className="bg-primary text-dark p-4 rounded-lg flex items-center justify-between">
                  <Link href={`/anime/${comment.anime_mal_id}`} className="flex gap-2 items-center">
                    <Image src={comment.user_profile} width={70} height={70} alt="..." className="rounded-full hover:rounded-full transition-all" />
                    <div>
                      <p className="text-sm font-semibold">{comment.anime_title}</p>
                      <p className="italic">{comment.comment}</p>
                    </div>
                  </Link>
                  <DeleteButton id={comment.id} endpoint="delete_comment" />
                </div>
              </>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Page;
