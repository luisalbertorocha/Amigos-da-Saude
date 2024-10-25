import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AvatarContext } from "../context/AvatarProvider";

export default function Personagem() {
  const { avatar, avatarInfo, trocarProximo, trocarAnterior } =
    useContext(AvatarContext);

  const salvarAvatar = () => {
    localStorage.setItem("avatar", JSON.stringify(avatar));
  };

  return (
    <div className="bg-azul-fundo-1 pb-4 pt-20 md:pb-10 md:pt-28">
      <div className="flex h-full flex-col-reverse justify-center gap-5 md:container md:mx-auto md:flex-row md:justify-between">
        <div className="px-4">
          <div className="border-azul-borda-fundo-1 container mx-auto flex h-[32rem] flex-col items-center rounded-3xl border bg-azul-fundo-2 px-4 py-6 md:h-[38rem] md:px-16">
            <div className="absolute">
              <div className="relative h-full w-40 md:w-[13rem]">
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
                <img
                  className="absolute"
                  src={avatarInfo.tenis[avatar.tenis]}
                  alt=""
                />
              </div>
            </div>

            <div className="relative flex h-full w-[18rem] flex-col gap-2 md:w-[20rem]">
              <div className="absolute top-14 flex w-full justify-between">
                <button onClick={() => trocarAnterior("pele")}>
                  <ChevronLeftIcon className="text-cinza-tipografia-texto size-11 transition md:hover:scale-125" />
                </button>
                <button onClick={() => trocarProximo("pele")}>
                  <ChevronRightIcon className="size-11 transition md:hover:scale-125" />
                </button>
              </div>

              <div className="absolute top-36 flex w-full justify-between md:top-48">
                <button onClick={() => trocarAnterior("camisa")}>
                  <ChevronLeftIcon className="size-11 transition md:hover:scale-125" />
                </button>
                <button onClick={() => trocarProximo("camisa")}>
                  <ChevronRightIcon className="size-11 transition md:hover:scale-125" />
                </button>
              </div>

              <div className="absolute top-60 flex w-full justify-between md:top-80">
                <button onClick={() => trocarAnterior("calca")}>
                  <ChevronLeftIcon className="size-11 transition md:hover:scale-125" />
                </button>
                <button onClick={() => trocarProximo("calca")}>
                  <ChevronRightIcon className="size-11 transition md:hover:scale-125" />
                </button>
              </div>

              <div className="absolute top-80 flex w-full justify-between md:top-[26rem]">
                <button onClick={() => trocarAnterior("tenis")}>
                  <ChevronLeftIcon className="size-11 transition md:hover:scale-125" />
                </button>
                <button onClick={() => trocarProximo("tenis")}>
                  <ChevronRightIcon className="size-11 transition md:hover:scale-125" />
                </button>
              </div>
            </div>

            <div className="flex w-full max-w-[20rem] justify-between md:w-[24rem]">
              <button
                className="bg-verde-Pbotao text-cinza-tipografia-texto md:hover:bg-verde-Phover rounded-md px-4 py-1 font-poppins shadow-lg transition hover:shadow-lg active:bg-lime-100 md:px-5 md:py-2 md:hover:scale-110 md:hover:bg-lime-50"
                onClick={salvarAvatar}
              >
                Salvar
              </button>
              <Link
                to="/videos"
                className="border-verde- text-cinza-tipografia-texto md:hover:bg-amarelo-Phover rounded-md border bg-azul-fundo-2 px-4 py-1 font-poppins transition hover:bg-lime-50 hover:shadow-lg active:bg-lime-100 md:px-5 md:py-2 md:hover:scale-110"
              >
                Ver Videos
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-amarelo-fundo w-full flex-col gap-5 px-6 py-4 md:flex md:w-[50rem] md:rounded-xl">
          <h1 className="text-roxo-tipografia-titulo my-3 text-center font-yanone text-3xl font-semibold tracking-wide md:text-center md:text-4xl">
            Crie seu personagem do jeitinho que voce quiser!
          </h1>

          <div className="mt-8 flex flex-col gap-5 pb-6 pl-3 font-poppins md:mt-4">
            <p className="text-roxo-tipografia-texto text-lg md:text-2xl">
              Aqui você pode criar seu próprio personagem!
            </p>

            <p className="text-roxo-tipografia-texto text-lg md:text-2xl">
              Ele será seu amigo na aventura e vai te ajudar a aprender sobre os
              exames que você fará no hospital. Vocês assistirão a vídeos
              interativos juntos e vão aprender muitas coisas legais!
            </p>

            <p className="text-roxo-tipografia-texto text-lg md:text-2xl">
              Use as setas para personalizar seu personagem e, quando estiver
              pronto, clique no botão para salvar.
            </p>
            <p className="text-roxo-tipografia-titulo pt-8 text-center text-lg font-medium tracking-wide md:text-3xl">
              Divirta-se!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
