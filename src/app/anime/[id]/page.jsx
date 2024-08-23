import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import React from "react";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  // mencari id dan user email yang sama di database
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  const comment = await prisma.comment.findFirst({
    where: { anime_mal_id: id },
  });

  return (
    <>
      <section className="px-4 container mx-auto text-primary mb-4">
        <div className="text-2xl pt-4">
          <h3>
            {anime.data.title} - {anime.data.year ? `${anime.data.year}` : null}
          </h3>
          {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />}
        </div>

        <div className="pt-4 flex gap-2 overflow-x-auto">
          <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
            <h3>Peringkat</h3>
            <p>{anime.data.rank}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
            <h3>Popularity</h3>
            <p>{anime.data.popularity}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
            <h3>Skor</h3>
            <p>{anime.data.score}</p>
          </div>
          <div className="w-36 flex flex-col justify-center items-center rounded border p-2">
            <h3>Episodes </h3>
            <p>{anime.data.episodes}</p>
          </div>
          <div className="min-w-fit flex flex-col justify-center items-center rounded border p-2">
            <h3>Usia</h3>
            <p className="text-center text-sm">{anime.data.rating}</p>
          </div>
        </div>

        <div className="pt-4 flex md:flex-nowrap flex-wrap gap-4">
          <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover hover:cursor-pointer hover:scale-105 transition-all" />
          <p className="text-justify text-lg">{anime.data.synopsis}</p>
        </div>

        <div className="py-8">
          <h3 className="text-primary text-2xl mb-2">Komentar Netizen</h3>
          {!comment ? (
            <p className="mb-4 text-xl">Belum ada komentar</p>
          ) : (
            <>
              <CommentBox anime_mal_id={id} />
            </>
          )}
          {user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} user_profile={user?.image} />}
        </div>

        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </section>
    </>
  );
};

export default Page;
