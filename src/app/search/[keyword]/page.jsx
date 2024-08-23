import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page({ params }) {
  // untuk merubah %20 menjadi spasi
  // let removeSpace = params.keyword;
  // removeSpace = removeSpace.replace(/%20/g, " ");

  // bisa menggunakan cara ini juga
  const removeSpace = decodeURI(params.keyword);
  // params.keyword untuk menampilkan apa yang cari oleh user

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${removeSpace}`);
  // const searchAnime = await response.json();

  const searchAnime = await getAnimeResponse("anime", `q=${removeSpace}`);

  return (
    <>
      <section className="container mx-auto px-4">
        <Header title={`Pencarian untuk '${removeSpace}' `} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}
