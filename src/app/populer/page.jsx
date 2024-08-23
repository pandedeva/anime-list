"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  // kalau pakai use client sudah tidak bisa fetching data, harus masukan kedalam function baru
  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}&limit=24`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <section className="container mx-auto px-4">
        <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
        <AnimeList api={topAnime} />
        <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
      </section>
    </>
  );
};

export default Page;
