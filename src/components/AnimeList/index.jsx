import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-primary hover:text-accent transition-all" key={index}>
            <Image src={anime.images.webp.image_url} width={350} height={350} alt={anime.title} className="w-full max-h-96 object-cover rounded-lg hover:scale-105 transition-all" />
            <h3 className="font-bold p-4 text-base md:text-xl ">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
