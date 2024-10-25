import { useContext } from "react";
import { Link } from "react-router-dom";
import imagem from "../assets/banner-home.png";
import { SearchVideos } from "../components/serchVideos";
import { ExamesContext } from "../context/ExamesProvider";

export default function Videos() {
  const { exames } = useContext(ExamesContext);

  return (
    <div className="container mx-auto flex min-h-screen pb-6 pt-28 md:pt-36">
      <div className="relative flex w-full flex-col gap-20 pt-80 md:pt-0 lg:flex-row">
        <div className="absolute top-0 w-full px-4 md:static md:h-full lg:w-[25rem]">
          <SearchVideos destino="videos" />
        </div>

        <ul className="grid w-full auto-rows-min grid-cols-1 justify-center gap-x-16 gap-y-14 md:grid-cols-[repeat(auto-fill,_250px)]">
          {exames.map((exame) => (
            <li
              key={exame.id}
              className="h-64 w-full cursor-pointer justify-self-center transition hover:scale-110 md:w-60"
            >
              <Link to={exame.id} className="flex h-full flex-col">
                <img
                  src={imagem}
                  alt=""
                  className="h-full object-cover md:rounded-t-2xl"
                />
                <h2 className="flex items-center justify-center bg-azul-claro-100 py-4 text-center font-nunito text-lg font-medium uppercase active:bg-lime-200 md:rounded-b-2xl">
                  {exame.name}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
