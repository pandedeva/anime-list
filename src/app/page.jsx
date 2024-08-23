import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

export default async function Page() {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");

  // let randomNum = Math.floor(Math.random() * 201);
  // agar recomendedAnime masih punya mapingan data, karna animeList map langsung ke api.data & agar data muncul
  // slice agar memunculkan data dari index 0 sampai 4
  // recomendedAnime = { data: recomendedAnime.slice(randomNum, randomNum + 4) };

  recomendedAnime = reproduce(recomendedAnime, 4);

  return (
    <>
      <section className="container mx-auto px-4">
        <Header title="Paling Populer" linkHref="/populer/" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>

      <section className="container mx-auto px-4">
        <Header title="Rekomendasi Anime" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
}
