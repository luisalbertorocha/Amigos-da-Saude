import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  const handleMenu = () => {
    const menuMobile = document.querySelector("#menu_mobile");
    menuMobile.classList.toggle("hidden");
  };

  return (
    <header className="bg-azul-header fixed top-0 z-50 h-20 w-screen">
      <div className="container relative mx-auto flex h-full items-center justify-between px-4">
        <div>LOGO</div>

        <Bars3Icon className="size-6 md:hidden" onClick={handleMenu} />
        <div
          id="menu_mobile"
          className="absolute bottom-0 right-0 z-50 hidden translate-y-[100%] rounded-b-lg bg-azul-100 px-6 py-4 font-poppins text-lg font-medium opacity-95 md:hidden"
        >
          <nav className="flex flex-col gap-5">
            <Link to="/" onClick={handleMenu}>
              HOME
            </Link>
            <Link to="/personagem" onClick={handleMenu}>
              PERSONAGEM
            </Link>
            <Link to="/quiz/1" onClick={handleMenu}>
              QUIZ
            </Link>
            <Link to="/videos" onClick={handleMenu}>
              VIDEOS
            </Link>
          </nav>
        </div>

        <nav className="hidden justify-around gap-2 md:flex md:gap-6">
          <Link
            to="/"
            className="text-azul-tipografia-titulo md:bg-verde-botao md:hover:bg-verde-hover-botao md:hover:text-cinza-tipografia-texto md:focus:bg-verde-focus-botao md:active:bg-verde-active-botao rounded-3xl text-sm font-medium transition hover:scale-110 md:px-4 md:py-2 md:focus:ring-2"
          >
            HOME
          </Link>
          <Link
            to="/personagem"
            className="text-azul-tipografia-titulo md:bg-verde-botao md:hover:bg-verde-hover-botao md:hover:text-cinza-tipografia-texto md:focus:bg-verde-focus-botao md:active:bg-verde-active-botao rounded-3xl text-sm font-medium transition hover:scale-110 md:px-4 md:py-2 md:focus:ring-2"
          >
            PERSONAGEM
          </Link>
          <Link
            to="/quiz/1"
            className="text-azul-tipografia-titulo md:bg-verde-botao md:hover:bg-verde-hover-botao md:hover:text-cinza-tipografia-texto md:focus:bg-verde-focus-botao md:active:bg-verde-active-botao rounded-3xl text-sm font-medium transition hover:scale-110 md:px-4 md:py-2 md:focus:ring-2"
          >
            QUIZ
          </Link>
          <Link
            to="/videos"
            className="text-azul-tipografia-titulo md:bg-verde-botao md:hover:bg-verde-hover-botao md:hover:text-cinza-tipografia-texto md:focus:bg-verde-focus-botao md:active:bg-verde-active-botao rounded-3xl text-sm font-medium transition hover:scale-110 md:px-4 md:py-2 md:focus:ring-2"
          >
            VIDEOS
          </Link>
        </nav>
      </div>
    </header>
  );
}
