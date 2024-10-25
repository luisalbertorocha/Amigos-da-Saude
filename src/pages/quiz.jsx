import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ExamesContext } from "../context/ExamesProvider";
import { SearchVideos } from "../components/serchVideos";

export default function Quiz() {
  const { exames } = useContext(ExamesContext);

  const { id } = useParams("id");
  const findExame = exames.find((quiz) => quiz.id == id);

  const tamanhoQuiz = findExame.quiz.length;
  let indexQuiz = 0;
  let pontuacao = 0;

  const setQuiz = () => {
    const perguntaIndex = document.querySelector("#pergunta-index");
    const pergunta = document.querySelector("#pergunta");
    const alternativa1 = document.querySelector("#alternativa1");
    const alternativa2 = document.querySelector("#alternativa2");
    const alternativa3 = document.querySelector("#alternativa3");
    const alternativa4 = document.querySelector("#alternativa4");

    perguntaIndex.classList.remove("hidden");

    alternativa1.classList.remove("hidden");
    alternativa2.classList.remove("hidden");
    alternativa3.classList.remove("hidden");
    alternativa4.classList.remove("hidden");

    perguntaIndex.innerHTML = `PERGUNTA ${indexQuiz + 1}:`;
    pergunta.innerHTML = findExame.quiz[indexQuiz].pergunta;

    alternativa1.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa1;
    alternativa2.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa2;
    alternativa3.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa3;
    alternativa4.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa4;
  };

  useEffect(() => {
    setQuiz();
  });

  const handleQuiz = () => {
    const perguntaIndex = document.querySelector("#pergunta-index");
    const pergunta = document.querySelector("#pergunta");
    const alternativa1 = document.querySelector("#alternativa1");
    const alternativa2 = document.querySelector("#alternativa2");
    const alternativa3 = document.querySelector("#alternativa3");
    const alternativa4 = document.querySelector("#alternativa4");

    if (indexQuiz >= tamanhoQuiz) {
      console.log("acabou");
      console.log(pontuacao);

      pergunta.innerHTML = `Acabou, sua pontuação foi: ${pontuacao * 10}`;

      alternativa1.classList.add("hidden");
      alternativa2.classList.add("hidden");
      alternativa3.classList.add("hidden");
      alternativa4.classList.add("hidden");
      return;
    }

    pergunta.innerHTML = findExame.quiz[indexQuiz].pergunta;
    perguntaIndex.innerHTML = `PERGUNTA ${indexQuiz + 1}:`;

    alternativa1.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa1;
    alternativa2.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa2;
    alternativa3.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa3;
    alternativa4.innerHTML =
      findExame.quiz[indexQuiz].alternativas.alternativa4;
  };

  const checarResposta = () => {
    const resposta = event.target.id.slice(-1);
    if (resposta == findExame.quiz[indexQuiz].resposta) {
      console.log("acertou");
      pontuacao += 1;
    }
    indexQuiz += 1;
    return handleQuiz();
  };

  return (
    <div className="flex pb-4 pt-20">
      <div className="flex w-full flex-col gap-6 md:gap-8">
        <div className="w-full bg-amarelo-100">
          <div className="container mx-auto flex flex-col px-4 py-6">
            <h2 className="font-yanone text-[3rem] font-bold">SUPER QUIZ</h2>
            <p className="text-xl">
              Aqui voce podera brincar no nosso quiz sobre os videos que voce
              acabou de assitir.
            </p>
          </div>
        </div>

        <div className="container mx-auto flex w-full flex-col gap-4 px-4 md:flex-row md:justify-between xl:gap-10">
          <div className="flex w-full grow flex-col gap-5 rounded-xl border px-4 py-6 md:px-10">
            <div className="border-b pb-4">
              <h3 className="text-center font-nunito text-2xl font-semibold">
                Tema: {findExame.name}
              </h3>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h3
                  id="pergunta-index"
                  className="font-poppins text-4xl font-bold"
                >
                  PERGUNTA {indexQuiz + 1}:
                </h3>
                <h3
                  id="pergunta"
                  className="font-nunito text-xl font-semibold md:text-3xl"
                >
                  {findExame.quiz[0].pergunta}
                </h3>
              </div>

              <div className="flex flex-col gap-4 mt-5">
                <p
                  id="alternativa1"
                  onClick={() => checarResposta()}
                  className="cursor-pointer rounded-lg border px-3 py-5 text-lg hover:bg-lime-50 md:p-3"
                >
                  {findExame.quiz[0].alternativas.alternativa1}
                </p>
                <p
                  id="alternativa2"
                  onClick={() => checarResposta()}
                  className="cursor-pointer rounded-lg border px-3 py-5 text-lg hover:bg-lime-50 md:p-3"
                >
                  {findExame.quiz[0].alternativas.alternativa2}
                </p>
                <p
                  id="alternativa3"
                  onClick={() => checarResposta()}
                  className="cursor-pointer rounded-lg border px-3 py-5 text-lg hover:bg-lime-50 md:p-3"
                >
                  {findExame.quiz[0].alternativas.alternativa3}
                </p>
                <p
                  id="alternativa4"
                  onClick={() => checarResposta()}
                  className="cursor-pointer rounded-lg border px-3 py-5 text-lg hover:bg-lime-50 md:p-3"
                >
                  {findExame.quiz[0].alternativas.alternativa4}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:h-full md:w-[25rem]">
            <SearchVideos destino="videos" />
          </div>
        </div>
      </div>
    </div>
  );
}
