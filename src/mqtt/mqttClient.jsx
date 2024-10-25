import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import { doc } from 'prettier';

const MqttClient = () => {
    const [messages, setMessages] = useState([]);
    const [client, setClient] = useState(null);

    useEffect(() => {
        const options = {
            username: 'dagalera',
            password: '!senhasecreta',
            clientId: `mqttjs_${Math.random().toString(16).substr(2, 8)}`,
        };
        const mqttClient = mqtt.connect('wss://mqtt-dashboard.com:8884/mqtt', options);


        mqttClient.on('connect', () => {
            console.log('Connected to MQTT broker');
            mqttClient.subscribe('teste/dagalera', (err) => {
                if (err) {
                    console.error('Subscription error:', err);
                } else {
                    console.log('Subscribed to topic');
                }
            });
        });

        mqttClient.on('message', (topic, message) => {
            console.log('Message received:', topic, message.toString());
            setMessages([message.toString()]);
        });

        mqttClient.on('error', (error) => {
            console.error('MQTT Client Error:', error);
        });

        return () => {
            mqttClient.end();
        };
    }, []);

    const indexPergunta = 0

    const setPerguntas = () => {
        const pergunta = document.getElementById('pergunta');
        const resposta1 = document.getElementById('resposta1');
        const resposta2 = document.getElementById('resposta2');
        const resposta3 = document.getElementById('resposta3');
        const resposta4 = document.getElementById('resposta4');

        pergunta.innerHTML = indexPergunta 
        resposta1.innerHTML = indexPergunta + 1 
        resposta2.innerHTML = indexPergunta + 1 
        resposta3.innerHTML = indexPergunta + 1 
        resposta4.innerHTML = indexPergunta + 1 
    }

    return (
        <div className='pl-11 bg-azul-claro-100 text-2xl font-yanone text'>
            <ul>
                <li id='pergunta'>{messages[0]}</li>
                <li id='resposta1'>{messages[1]}</li>
                <li id='resposta2'>{messages[2]}</li>
                <li id='resposta3'>{messages[3]}</li>
                <li id='resposta4'>{messages[4]}</li>
            </ul>
        </div>
    );
};

export default MqttClient;
