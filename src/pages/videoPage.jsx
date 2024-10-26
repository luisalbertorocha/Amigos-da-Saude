import { useContext } from "react";
import { AvatarContext } from "../context/AvatarProvider";
import { ExamesContext } from "../context/ExamesProvider";
import { useParams } from "react-router-dom";
import { SearchVideos } from "../components/serchVideos";
import  medico  from "../assets/medico.png"; 

export default function VideoPage() {
  const { avatar, avatarInfo } = useContext(AvatarContext);
  const { exames } = useContext(ExamesContext);

  const { id } = useParams("id");
  const findExame = exames.find((exame) => exame.id == id);

  let indexDialogo = 1;
  const handleClickExame = () => {
    const textField = document.getElementById("text-field");
    const tamanhoDialogo = findExame.videoDialogo.length;

    textField.innerHTML = findExame.videoDialogo[indexDialogo];

    if (indexDialogo >= tamanhoDialogo) {
      textField.innerHTML = "Fim.";
    }
    indexDialogo += 1;
  };

  return (
    <div className="flex w-full flex-col pt-20">
      <div className=" bg-amarelo-fundo p-4">
        <h1 id="exame-title" className="font-yanone py-3 text-4xl tracking-wider md:tracking-wide text-azul-tipografia-titulo container mx-auto">
          Tema: {findExame.name}
        </h1>
      </div>

      <div className="container mx-auto grow ">
        <div
          id="exame"
          className="relative h-[500px] gap-4 pt-3 sm:border border-azul-header md:h-[620px] bg-azul-fundo-2 mt-3"
        >
          <div id="personagem" className="absolute w-36 md:w-52">
            <div className="relative">
              <img
                className="absolute"
                src={avatarInfo.pele[avatar.pele]}
                alt=""
              />
              <img
                className="absolute"
                src={avatarInfo.camisa[avatar.camisa]}
                alt=""
              />
              <img
                className="absolute"
                src={avatarInfo.calca[avatar.calca]}
                alt=""
              />
            </div>
          </div>

          <div id="medico" className="absolute right-0 w-36 md:w-52">
            <div className="relative">
              <img
                src={medico}
                alt=""
                className="absolute"
              />
            </div>
          </div>

          <p
            id="text-field"
            className="bg-bege shadow-md shadow-azul-borda-fundo-1 mb-3 0 absolute bottom-1 left-[50%] z-10 w-[90%] translate-x-[-50%] rounded-lg border px-5 py-5 font-poppins text-xl md:text-2xl"
          >
            {findExame.videoDialogo[0]}
          </p>

          <div
            id="exame-click"
            className="absolute z-20 h-full w-full cursor-pointer"
            onClick={() => handleClickExame()}
          ></div>
        </div>

        <div className="mb-6 h-[20rem] w-full sm:pt-5 md:h-full lg:w-[25rem]">
          <SearchVideos destino="videos" />
        </div>
      </div>
    </div>
  );
}
