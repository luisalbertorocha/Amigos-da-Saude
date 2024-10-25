import { createContext, useState } from "react";

export const ExamesContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ExamesProvider = ({ children }) => {
  const exames = [
    {
      id: "1",
      name: "Exame de sangue",
      videoDialogo: [
        "Personagem: Olá, tudo bem?",
        "Médico: Olá, tudo bem e você?",
        "Personagem: Estou bem, vim fazer um exame de sangue.",
        "Médico: Certo, você já fez esse exame antes?",
        "Personagem: Sim, já fiz.",
        "Médico: Então, você está em jejum de 12 horas?",
        "Personagem: Você quer saber se estou sem comer por 12 horas?",
        "Médico: Sim, estou perguntando isso para garantir que os resultados sejam precisos.",
        "Personagem: Sim, estou em jejum.",
        "Médico: Ótimo! O jejum ajuda a ter resultados mais claros.",
        "Personagem: O que exatamente acontece durante o exame?",
        "Médico: Durante o exame, vamos coletar uma pequena amostra de sangue.",
        "Personagem: Isso vai doer muito?",
        "Médico: Você pode sentir uma picada rápida, mas é bem rápido.",
        "Personagem: E depois do exame, o que eu faço?",
        "Médico: Após o exame, você pode voltar a comer normalmente e deve beber bastante água.",
        "Personagem: Legal! Obrigado, doutor!",
        "Médico: De nada! Agora que você sabe como funciona o exame de sangue, vamos começar!",
      ],
      quiz: [
        {
          id: 1,
          pergunta: "O que o paciente deve fazer antes de um exame de sangue?",
          resposta: 1,
          alternativas: {
            alternativa1: "Ficar em jejum por algumas horas",
            alternativa2: "Tomar um remédio para preparar para o exame",
            alternativa3: "Comer bastante",
            alternativa4: "Fazer exercícios físicos intensos",
          },
        },
        {
          id: 2,
          pergunta: "O que significa 'jejum' para um exame de sangue?",
          resposta: 3,
          alternativas: {
            alternativa1: "Comer apenas frutas",
            alternativa2: "Beber bastante água antes do exame",
            alternativa3:
              "Não comer ou beber nada por algumas horas antes do exame",
            alternativa4: "Comer até ficar de barriga cheia",
          },
        },
        {
          id: 3,
          pergunta: "Por que o exame de sangue é importante?",
          resposta: 1,
          alternativas: {
            alternativa1: "Para detectar doenças",
            alternativa2: "Para medir a temperatura",
            alternativa3: "Para verificar a altura",
            alternativa4: "Para perdermos o medo de agulhas",
          },
        },
        {
          id: 4,
          pergunta: "O que acontece durante a coleta de sangue?",
          resposta: 3,
          alternativas: {
            alternativa1:
              "Coletamos o máximo de sangue possível para tratar uma doença",
            alternativa2: "O paciente precisa comer na hora do exame",
            alternativa3: "Coletamos uma amostra mínima de sangue do paciente",
            alternativa4: "É normal o paciente sentir muita dor",
          },
        },
        {
          id: 5,
          pergunta: "O que acontece depois de terminar o exame?",
          resposta: 2,
          alternativas: {
            alternativa1: "O paciente deve fazer jejum por mais algumas horas",
            alternativa2: "O paciente pode voltar a comer normalmente",
            alternativa3: "O paciente deve ficar sem tomar água",
            alternativa4: "O paciente vai sentir muita dor",
          },
        },
      ],
    },
    {
      id: "2",
      name: "Tomografia",
      videoDialogo: [
        "Personagem: Olá, tudo bem?",
        "Médico: Olá, tudo bem e você?",
        "Personagem: Estou bem, vim fazer um exame de tomografia.",
        "Médico: Certo, você já fez esse exame antes?",
        "Personagem: Não, é a primeira vez.",
        "Médico: Então, vou te explicar como funciona.",
        "Personagem: Por favor, me diga o que vou precisar fazer.",
        "Médico: Primeiro, você precisa se preparar. Geralmente, não é necessário jejum, mas vamos verificar se você precisa evitar alguns alimentos.",
        "Personagem: E o que acontece durante o exame?",
        "Médico: Durante a tomografia, você vai deitar em uma mesa que se move para dentro de um tubo. A máquina vai tirar várias imagens do seu corpo.",
        "Personagem: Isso vai demorar muito?",
        "Médico: O exame é rápido, geralmente leva apenas alguns minutos.",
        "Personagem: E vai doer?",
        "Médico: Não, você não sentirá dor. Pode apenas ouvir alguns ruídos da máquina.",
        "Personagem: E se eu sentir claustrofobia dentro do tubo?",
        "Médico: Se isso acontecer, você pode avisar e faremos o possível para te ajudar. Há também a opção de um exame aberto, se necessário.",
        "Personagem: E depois do exame, o que eu faço?",
        "Médico: Após a tomografia, você pode voltar às suas atividades normais. Se usou contraste, talvez precise beber mais água.",
        "Personagem: Legal! Obrigado, doutor!",
        "Médico: De nada! Agora que você sabe como funciona o exame de tomografia, vamos começar!",
      ],
      quiz: [
        {
          id: 1,
          pergunta: "Qual é o principal objetivo de uma tomografia?",
          resposta: 2,
          alternativas: {
            alternativa1: "Capturar imagens do sangue em circulação.",
            alternativa2:
              "Criar imagens detalhadas de órgãos internos e ossos.",
            alternativa3: "Monitorar a frequência cardíaca.",
            alternativa4: "Analisar os níveis de glicose no corpo.",
          },
        },
        {
          id: 2,
          pergunta: "O que é necessário remover antes de uma tomografia?",
          resposta: 4,
          alternativas: {
            alternativa1: "Óculos de grau.",
            alternativa2: "Aparelhos auditivos.",
            alternativa3: "Chapéus ou bonés.",
            alternativa4: "Objetos metálicos, como joias e piercings.",
          },
        },
        {
          id: 3,
          pergunta: "Quanto tempo geralmente dura um exame de tomografia?",
          resposta: 3,
          alternativas: {
            alternativa1: "Cerca de 1 hora.",
            alternativa2: "Entre 30 e 40 minutos.",
            alternativa3: "Entre 5 e 10 minutos.",
            alternativa4: "Mais de 2 horas.",
          },
        },
        {
          id: 4,
          pergunta: "A tomografia computadorizada usa qual tipo de tecnologia?",
          resposta: 1,
          alternativas: {
            alternativa1:
              "Raios-X em várias direções para criar imagens detalhadas.",
            alternativa2: "Ondas sonoras para mapear o interior do corpo.",
            alternativa3:
              "Imãs poderosos para alinhar moléculas de água no corpo.",
            alternativa4:
              "Laseres infravermelhos para detectar calor corporal.",
          },
        },
        {
          id: 5,
          pergunta:
            "Por que o contraste é usado em alguns exames de tomografia?",
          resposta: 2,
          alternativas: {
            alternativa1: "Para ajudar a reduzir o tempo de exame.",
            alternativa2:
              "Para destacar órgãos ou tecidos específicos nas imagens.",
            alternativa3: "Para melhorar a resolução da imagem.",
            alternativa4: "Para evitar a exposição excessiva à radiação.",
          },
        },
      ],
    },
    {
      id: "3",
      name: "Raio-x",
      videoDialogo: [
        "Personagem: Olá, tudo bem?",
        "Médico: Olá, tudo bem e você?",
        "Personagem: Estou bem, vim fazer um exame de raio X.",
        "Médico: Certo, você já fez esse exame antes?",
        "Personagem: Não, é a primeira vez.",
        "Médico: Sem problemas! Vou te explicar como funciona.",
        "Personagem: O que eu preciso saber sobre o exame?",
        "Médico: O raio X é um exame que usa radiação para criar imagens do interior do seu corpo. Não é doloroso e leva apenas alguns minutos.",
        "Personagem: Preciso fazer alguma preparação antes do exame?",
        "Médico: Não é necessário jejum, mas é importante remover qualquer objeto metálico, como bijuterias ou cintos.",
        "Personagem: Isso vai doer?",
        "Médico: Não, você não sentirá dor. Apenas vai precisar ficar parado durante alguns segundos enquanto as imagens são feitas.",
        "Personagem: E quanto tempo leva o exame?",
        "Médico: O exame em si é rápido, normalmente dura de 5 a 10 minutos.",
        "Personagem: E depois do exame, o que eu faço?",
        "Médico: Após o raio X, você pode retomar suas atividades normais imediatamente.",
        "Personagem: Legal! E quando terei os resultados?",
        "Médico: Os resultados geralmente ficam prontos em poucas horas, e você pode consultar comigo em seguida.",
        "Personagem: Obrigado, doutor!",
        "Médico: De nada! Agora que você sabe como funciona o exame de raio X, vamos começar!",
      ],
      quiz: [
        {
            id: 1,
            pergunta: "Qual é a principal função do exame de raio-X?",
            resposta: 1,
            alternativas: {
                alternativa1: "Obter imagens de estruturas ósseas.",
                alternativa2: "Avaliar a função cardíaca.",
                alternativa3: "Medir o nível de açúcar no sangue.",
                alternativa4: "Monitorar o funcionamento do cérebro.",
            },
        },
        {
            id: 2,
            pergunta: "O que pode interferir na qualidade de um raio-X?",
            resposta: 4,
            alternativas: {
                alternativa1: "Uso de sapatos confortáveis.",
                alternativa2: "Beber água antes do exame.",
                alternativa3: "Tirar um cochilo antes do exame.",
                alternativa4: "Presença de objetos metálicos, como relógios ou colares.",
            },
        },
        {
            id: 3,
            pergunta: "Quanto tempo demora para tirar uma imagem de raio-X?",
            resposta: 3,
            alternativas: {
                alternativa1: "Mais de uma hora.",
                alternativa2: "Cerca de 30 minutos.",
                alternativa3: "Alguns segundos.",
                alternativa4: "Entre 15 a 20 minutos.",
            },
        },
        {
            id: 4,
            pergunta: "Por que os profissionais de saúde se afastam durante o exame de raio-X?",
            resposta: 2,
            alternativas: {
                alternativa1: "Porque o exame causa muito barulho.",
                alternativa2: "Para evitar exposição à radiação.",
                alternativa3: "Para garantir que o paciente esteja confortável.",
                alternativa4: "Porque precisam ajustar o equipamento remotamente.",
            },
        },
        {
            id: 5,
            pergunta: "Para que é usado o avental de chumbo durante um exame de raio-X?",
            resposta: 1,
            alternativas: {
                alternativa1: "Para proteger áreas do corpo da radiação.",
                alternativa2: "Para manter o paciente aquecido.",
                alternativa3: "Para estabilizar o paciente na mesa de exame.",
                alternativa4: "Para ajudar a capturar imagens mais nítidas.",
            },
        },
    ],
    },
  ];

  const searchExames = () => {
    const search = event.target.value.toLowerCase();
    setFilteredExames(
      exames.filter((exame) => exame.name.toLowerCase().includes(search)),
    );
  };

  const [filteredExames, setFilteredExames] = useState(exames);

  return (
    <ExamesContext.Provider
      value={{ exames, searchExames, filteredExames, setFilteredExames }}
    >
      {children}
    </ExamesContext.Provider>
  );
};
