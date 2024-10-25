import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ExamesContext } from "../context/ExamesProvider";
import { useNavigate } from "react-router-dom";

export const SearchVideos = ({ destino }) => {
  const { searchExames, filteredExames } = useContext(ExamesContext);
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-xl border bg-branco px-2 pt-3">
      <div className="bg flex flex-col gap-2">
        <h1 className="py-3 text-4xl font-bold text-center">Outros temas:</h1>
        <div className="flex w-full items-center rounded-full border px-2 py-1 focus-within:border-azul-200">
          <input
            type="text"
            onChange={() => searchExames()}
            className="w-[95%] bg-branco px-2 py-1 font-nunito focus:outline-none md:w-[90%]"
            placeholder="Pesquisar"
          />
          <div className="flex h-full items-center justify-center">
            <MagnifyingGlassIcon className="size-5" />
          </div>
        </div>
      </div>

      <ul className="text-cinza-tipografia-texto flex h-40 flex-col gap-6 overflow-y-auto font-poppins md:h-full">
        {filteredExames.map((quiz) => (
          <li
            key={quiz.id}
            className="border-azul-header bg-branco min-h-[30%] transform cursor-pointer rounded-lg border md:min-h-[35%]"
            onClick={() => navigate(`/${destino}/${quiz.id}`)}
          >
            <p className="px-3 py-2 text-lg font-semibold">{quiz.name}.</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
