import MqttClient from '../mqtt/mqttClient'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

export default function QuizArduino() {
    const cards = [
        {
            "id": 1,
            "title": "Card 1",
            "description": (
                <>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum ullam, explicabo consequuntur quam sit earum ea odit nulla laudantium et dolorem at, voluptatum magni? Dolorum minima impedit doloremque minus?</p>
                </>
            )
        },
        {
            "id": 2,
            "title": "Card 2",
            "description": (
                <>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi error illum ducimus inventore, eveniet eius aperiam eos facilis obcaecati perferendis ratione sunt, beatae illo rem ad ullam veritatis tempora non.</p>
                </>
            )
        },
        {
            "id": 3,
            "title": "Card 3",
            "description": (
                <>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi error illum ducimus inventore, eveniet eius aperiam eos facilis obcaecati perferendis ratione sunt, beatae illo rem ad ullam veritatis tempora non.</p>
                </>
            )
        }

    ]
    return (
        <div className='flex flex-col gap-8 h-screen bg-azul-claro-100'>
        <h1 className='text-6xl p-12 pb-0 md:mt-20 md:mb-12 text-teal-700'>Aprenda de um jeito mais divertido com nosso<b> quizz no controle!</b></h1>
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