import prisma from "@/libs/prisma";
import Image from "next/image";
import React from "react";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { comment } from "postcss";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="text-dark bg-primary p-4 rounded-lg flex gap-2 items-center">
            <Image src={comment.user_profile} width={70} height={70} alt="..." className="rounded-full hover:rounded-full transition-all" />
            <div>
              <p className="font-semibold">{comment.username}</p>
              <p>{comment.comment}</p>
              <div className="flex">
                {/* {comment.rating} */}
                {/* comment rating masih belum bisa memunculkan bintangnya, kalau int sudah muncul */}
                <Star size={24} className="cursor-pointer" weight="fill" color={"yellow"} />
                <Star size={24} className="cursor-pointer" weight="fill" color={"yellow"} />
                <Star size={24} className="cursor-pointer" weight="fill" color={"yellow"} />
                <Star size={24} className="cursor-pointer" weight="fill" color={"yellow"} />
                <Star size={24} className="cursor-pointer" weight="fill" color={"yellow"} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
