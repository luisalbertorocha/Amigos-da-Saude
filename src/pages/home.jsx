export default function Home() {
  return (
    <div className="pt-20">
      <div className="h-[20rem] bg-banner-mobile bg-contain bg-top bg-no-repeat sm:h-[32rem] md:bg-banner md:bg-cover"></div>
      <div className="bg-azul-fundo-1 h-[120rem] md:h-[130rem]">
        <div className="container mx-auto flex flex-wrap justify-between gap-20 bg-azul-fundo-2 pt-16">
          <div className="w-full px-4 pb-10 text-azul-900 md:w-[60%]">
            <h1 className="text-azul-tipografia-titulo font-yanone text-[3.8rem] md:text-[4rem]">
              Bem-Vindo!
            </h1>
            <div className="md:text-[2rem text-azul-tipografia-texto] flex flex-col gap-5 font-nunito text-[1.5rem]">
              <p>
                Estamos felizes em ter você aqui! Nossa missão é transformar a
                sua experiência no hospital em uma aventura divertida e
                educativa.
              </p>
              <p>
                Nossa plataforma foi criada especialmente para você, e estamos
                aqui para te ensinar um pouquinho sobre tudo que acontece dentro
                do hospital.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 flex h-auto w-full flex-col  bg-contain bg-right bg-no-repeat px-4 pr-8 pt-16 md:h-[50rem] md:flex-row md:justify-end md:bg-vetor1 md:pt-56">
            <div className="flex w-full flex-col items-center md:w-[46.25rem] md:items-start">
              <h3 className="text-azul-tipografia-titulo text-center font-yanone text-2xl text-[2.4rem] font-bold md:text-[2.8125rem]">
                Teste Seus Conhecimentos
              </h3>
              <p className="text-cinza-tipografia-texto pt-5 text-left font-poppins text-[1.3rem] text-base font-normal leading-relaxed md:text-[1.6rem] md:leading-normal">
                Com o Quiz: Coloque seus conhecimentos à prova com nossos
                quizzes interativos! Eles são uma maneira divertida de revisar o
                que você aprendeu e se preparar para o que vem pela frente.
                Responda às perguntas e veja o quanto você aprendeu!
              </p>
              <button className="mt-6 w-[18.75rem] rounded-xl border-2 border-borda-azul-25 p-2 font-yanone text-lg font-medium text-azul-900 md:ml-44 md:p-3 md:text-[2.1875rem]">
                Faça o quiz!
              </button>
            </div>
          </div>

          <div className="absolute top-[28rem] z-20 flex h-auto w-full flex-col  bg-contain bg-left bg-no-repeat md:h-[42.5rem] md:flex-row md:bg-vetor2">
            <div className="mt-16 w-full px-4 md:ml-10 md:mt-32 md:w-[45rem]">
              <h3 className="text-azul-tipografia-titulo text-center font-yanone text-2xl text-[2.4rem] font-bold md:text-[2.8125rem]">
                Crie Seu Personagem
              </h3>
              <p className="text-cinza-tipografia-texto md:text-[1.6rem] pt-5 text-left font-poppins text-[1.3rem] text-base leading-normal">
                Solte a imaginação e crie um personagem que seja a sua cara!
                Escolha entre uma variedade de roupas, acessórios e expressões
                para criar um amigo especial que estará ao seu lado em toda a
                jornada. É fácil e divertido - e o melhor de tudo, seu
                personagem será o protagonista de suas aventuras!
              </p>
              <button className="ml-6 mt-8 w-[18.75rem] rounded-xl border-2 border-borda-azul-25 p-2 font-yanone text-lg font-medium text-azul-900 md:p-3 md:text-[2.1875rem]">
                Crie seu personagem!
              </button>
            </div>
          </div>

          <div className="absolute top-[54rem] mt-16 flex h-auto w-full flex-col justify-end  bg-contain bg-right bg-no-repeat md:top-[54rem] md:h-[43rem] md:flex-row md:bg-vetor3">
            <div className="mt-16 w-full px-4 md:mt-56 md:w-[46.25rem]">
              <h3 className="text-azul-tipografia-titulo mr-3 text-center font-yanone text-2xl text-[2.0rem] font-bold md:text-start md:text-[2.8125rem]">
                Assista A Videos Educativos
              </h3>
              <p className="text-cinza-tipografia-texto mt-5 text-left font-poppins text-[1.3rem] text-base leading-normal md:text-[1.6rem]">
                Aprenda sobre o que acontece no hospital de maneira simples e
                interessante com nossos vídeos educativos. Cada vídeo é feito
                para explicar processos de forma clara e amigável, ajudando você
                a se sentir mais confiante e preparado.
              </p>
              <button className="mb-4 ml-5 mt-8 w-[18.75rem] rounded-xl border-2 border-borda-azul-25 p-2 font-yanone text-lg font-medium text-azul-900 md:ml-24 md:p-3 md:text-[2.1875rem]">
                Assista agora!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
