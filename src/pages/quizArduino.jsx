import MqttClient from '../mqtt/mqttClient'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

export default function QuizArduino() {
    const cards = [
        {
            "id": 1,
            "title": "Passo 1",
            "description": (
                <>
                    <p className=' text-4xl '>Para começar, pressione o botão vermelho no seu controle para iniciar o seu quizz. </p>
                </>
            )
        },
        {
            "id": 2,
            "title": "Passo 2",
            "description": (
                <>
                    <p className=' text-4xl '>Após iniciar o quizz, leia atentamente a pergunta e selecione a alternativa correta utilizando o seu controle.</p>
                </>
            )
        },
        {
            "id": 3,
            "title": "Passo 3",
            "description": (
                <>
                    <p className=' text-4xl '>Por fim, verifique quantas perguntas você acertou! </p>
                </>
            )
        }

    ]
    return (
        <div className='flex flex-col gap-8 h-screen bg-azul-claro-100'>
        <h1 className='text-6xl p-12 pb-0 md:mt-20 md:mb-0 text-teal-700'>Aprenda de um jeito mais divertido com nosso<b> quizz no controle!</b></h1>
        <h2 className='text-6xl p-12 mt-0 pb-0 md:mt-0 md:mb-4 text-teal-700'>É muito simples. Confira como jogar: </h2>



        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="bg"
            containerClass="container"
            dotListClass=""
            draggable={false}
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl={false}
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {cards.map((card) => (
                <div key={card.id} className={`rounded-lg ml-12 pb-20`}>
                    <div className='text-lg'>
                        <h2 className='mb-3 text-2xl'> <b>{card.title}</b></h2>
                        <div className='text-justify'>{card.description}</div>
                        <span><b>{card.button}</b></span>
                    </div>
                </div>
            ))}
        </Carousel>
        <MqttClient/>
    </div>
    )
}